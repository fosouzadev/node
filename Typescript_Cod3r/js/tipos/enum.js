"use strict";
// *** enums
// inicia com 0, 1, 2
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
console.log(Cor, typeof Cor);
let minhaCor = Cor.Verde;
console.log(minhaCor, typeof minhaCor);
// podemos definiros valores, iniciando em 10, 11, etc
var Carros;
(function (Carros) {
    Carros[Carros["City"] = 10] = "City";
    Carros[Carros["Corolla"] = 11] = "Corolla";
})(Carros || (Carros = {}));
console.log(Carros, typeof Carros);
