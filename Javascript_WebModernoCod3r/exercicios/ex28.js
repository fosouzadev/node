// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let qtdePares = 0
let qtdeImpares = 0

numeros.forEach(numero => {
    if (numero % 2 === 0)
        ++qtdePares
    else
        ++qtdeImpares
})

console.log('Pares', qtdePares, 'Impares', qtdeImpares)