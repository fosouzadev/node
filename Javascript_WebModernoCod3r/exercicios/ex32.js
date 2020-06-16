// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

const numeros = [5, 2, 4, 9]

const media = numeros.reduce((previous, current) => previous + current) / numeros.length

console.log(media)