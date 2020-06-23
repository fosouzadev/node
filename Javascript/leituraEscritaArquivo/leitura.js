const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// *** sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8') // retorna como string json
console.log(typeof conteudo, conteudo)
// ou 
const config = require('./arquivo.json') // retorna como objeto
console.log(typeof config, config)


// *** assincrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(config.db.host, config.db.port)
})

// listar arquivos da pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('\n arquivos da pasta')
    console.log(arquivos)
})