// 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
// o valor do elemento for maior que 5.

function func1(numeros, inteiro) {
    return numeros.map(numero => numero * inteiro)
}

function func2(numeros, inteiro) {
    return numeros.map(numero => {
        if (numero > 5)
            return numero * inteiro
        
        return numero
    })
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(func1(numeros, 2))
console.log(func2(numeros, 2))