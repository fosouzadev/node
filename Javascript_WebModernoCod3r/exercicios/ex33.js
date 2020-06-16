// 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
// quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
// Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
// mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.

const vetorInteiro = [4, 9, 6, 1]
const vetorString = ['z', 'f', 'c', 'u']
const vetorDouble = [1.5, 5.22, 9.1, 0.5]

console.log( vetorInteiro.concat(...vetorString, ...vetorDouble) )

console.log( vetorInteiro.concat(...vetorString).concat(...vetorDouble) )