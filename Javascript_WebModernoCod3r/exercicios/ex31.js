// 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

const numeros = [-1, 4, 3, 4, -6, 1, 3, 4, 5, -2]

console.log(numeros.filter(num => num < 0).length)