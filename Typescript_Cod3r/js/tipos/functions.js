"use strict";
// *** funções possuem tambem os tipo definidos nos seus parâmetros e retorno
function hello() {
    return 'Hello';
}
function sum(a, b) {
    return a + b;
}
function notReturn(name) {
    console.log(name);
}
console.log(hello());
console.log(sum(1, 3));
notReturn('felipe');
// atribuição de functions a variaveis
// definimos na variavel, a assinatura da function que espera receber
let ola;
ola = hello;
console.log(ola());
let soma;
soma = sum;
console.log(soma(1, 3));
let semRetorno;
semRetorno = notReturn;
semRetorno('felipe');
