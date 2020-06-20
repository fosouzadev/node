// 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.
// Resposta: OK

const numeros = []
for (let i = 1; i <= 30; i++)
    numeros.push(i)

let qtdeDentro = 0
let qtdeFora = 0

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] >= 10 && numeros[i] <= 20)
        ++qtdeDentro
    else
        ++qtdeFora
}

console.log(qtdeDentro, qtdeFora)