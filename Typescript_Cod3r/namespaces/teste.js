var Geometria;
(function (Geometria) {
    var Area;
    (function (Area) {
        var PI = 3.14;
        function circunferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.circunferencia = circunferencia;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
var Geometria;
(function (Geometria) {
    var Area;
    (function (Area) {
        function retangulo(base, altura) {
            return base * altura;
        }
        Area.retangulo = retangulo;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
/// <reference path="geometriaCirc.ts" />
/// <reference path="geometriaRect.ts" />
console.log(Geometria.Area.circunferencia(10));
console.log(Geometria.Area.retangulo(10, 20));
// consumindo namespaces de outros arquivos
// Opções no browser
//      * podemos referenciar todos os arquivos.js
//          <script src="build/namespaces/geometriaRect.js"></script>
//          <script src="build/namespaces/geometriaCirc.js"></script>
//          <script src="build/namespaces/namespacesClient.js"></script>
//      * podemos compilar todos os arquivos.ts em um único arquivo.js manualmente com "tsc -w --outFile"
//          tsc -w --outFile [nomeArquivoSaida.js] [arquivo1.ts] [arquivo2.ts]
//      * podemos incluir referencias no arquivo principal, assim a compilação cuida dos apontamentos
//          usamos nesse arquivo esse exemplo, usando três barras ///
//          tsc -w --outFile [nomeArquivoSaida.js] [arquivoComReferencias.ts]
//          ///<reference path="geometriaCirc.ts"/>
//          ///<reference path="geometriaRect.ts"/>
