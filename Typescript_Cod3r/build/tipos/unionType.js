"use strict";
// *** union types
let nota1 = 10;
console.log(nota1, typeof nota1);
// pra flexibilizar a variável nota acima para alguns tipos específicos
// o typeof exibe o tipo do valor atribuido
let nota2 = 10;
console.log(nota2, typeof nota2); // typeof number
nota2 = '10';
console.log(nota2, typeof nota2); // typeof string
// union types pode ser utilizado para valores opcionais que terão seu valor null
let altura;
altura = 10;
console.log(altura, typeof altura);
altura = null;
console.log(altura, typeof altura);
let marca;
marca = null;
let aluno = {
    id: 0,
    name: null
};
//# sourceMappingURL=unionType.js.map