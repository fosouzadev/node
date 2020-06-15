// 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

function validarNotas(codigoAluno, n1, n2, n3) {
    let notas = [n1, n2, n3]

    const maiorNota = Math.max(...notas)
    notas = notas.filter((nota, indice) => indice != notas.indexOf(maiorNota))
    
    const media = (maiorNota * 4 + notas[0] * 3 + notas[1] * 3) / (4 + 3 + 3)

    return `$Aluno ${codigoAluno} Notas ${n1} ${n2} ${n3} Média ${media} Status ${media >= 5 ? 'Aprovado' : 'Reprovado'}`
}

console.log(validarNotas(1, 7, 3, 9))
console.log(validarNotas(1, 9, 3, 7))
console.log(validarNotas(1, 3, 9, 7))