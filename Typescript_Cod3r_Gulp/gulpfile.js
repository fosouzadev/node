const { series, parallel, src, dest } = require('gulp')
const del = require('del')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const tsify = require('tsify')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')

// exclui diretorio de destino do build
function limparDist() {
    return del(['dist'])
}

function copiarHtml() {
    return src('public/**/*')  // copiar arquivos desse local
        .pipe(dest('dist'))    // para esse local
}

function gerarJs() {
    return browserify({       // define ponto de entrada da aplicação, ao qual tem as referências de todos os arquivos necessários
        basedir: '.',
        entries: ['src/main.ts']
     })
     .plugin(tsify)           // interpreta o typescript e gere o javascript
     .bundle()
     .pipe(source('app.js'))  // coloca o javascript gerado nesse arquivo
     .pipe(dest('dist'))      // copia o arquivo para a pasta de destino
}

function gerarJsProducao(){
    return src('dist/app.js')       // copia arquivo
        .pipe(rename('app.min.js'))  // renomeia a copia
        .pipe(uglify())              // minimiza
        .pipe(dest('dist'))          // copia para destino
}

// 1. limparDist sera executado de forma serial 
// 2. copiarHtml e gerarJs serão executados de forma paralela
// 3. gerarJsProducao sera executado de forma serial 
exports.default = series(
    limparDist,
    parallel(gerarJs, copiarHtml),
    gerarJsProducao
)