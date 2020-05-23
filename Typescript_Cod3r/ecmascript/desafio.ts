// *** Exercicio 1
// var dobro = function(valor) {
//     return valor * 2
// }
const dobro = (valor: number) : number => valor * 2
console.log(dobro(10))


// *** Exercicio 2
// var dizerOla = function (nome) {
//     if (nome === undefined) { nome = "Pessoa" }
//     console.log("Ola, " + nome)
// }
const dizerOla = (nome: string = 'pessoa') : void => console.log(`Ola ${nome}`)
dizerOla()
dizerOla("Anna")
 

// *** Exercicio 3, imprimir o menor valor
const nums = [-3, 33, 38, 5]
//console.log('???')
console.log(Math.min(...nums))


// *** Exercicio 4, adicionar todos os elementos de 'nums' em array
//var array = [55, 20]
//console.log(array)
const array: number[] = [55, 20, ...nums]
console.log(array)

 
// *** Exercicio 5
const notas = [8.5, 6.3, 9.4]
// var notas1 = notas[0]
// var notas2 = notas[1]
// var notas3 = notas[2] 
const [n1, n2, n3] = notas
console.log(n1, n2, n3)


// *** Exercicio 6
const cientista = {primeiroNome: "Will", experiencia: 12}
// var primeiroNome = cientista.primeiroNome
// var experiencia = cientista.experiencia
const { primeiroNome, experiencia } = cientista
console.log(primeiroNome, experiencia)