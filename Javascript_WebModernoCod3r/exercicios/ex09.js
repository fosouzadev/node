// 09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
// classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
// possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
// que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
// arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
// 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
// seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
// e o aluno será aprovado.

function validarNota(nota) {
    if (nota < 0 || nota > 100)
        return `${nota} - Inválida`
    
    if (nota < 38)
        return `${nota} - Reprovado`
    
    let proxMultiplo = 0
    let notaAux = nota
    
    do {
        if (notaAux % 5 === 0)
            proxMultiplo = notaAux
        else
            ++notaAux
    } while (proxMultiplo === 0)
    
    if (proxMultiplo - nota < 3)
        nota = proxMultiplo

    return nota < 40 ? `${nota} - Reprovado` : `${nota} - Aprovado`
}

console.log(`${-1} = ${validarNota(-1)}`)
console.log(`${110} = ${validarNota(110)}`)
console.log(`${29} = ${validarNota(29)}`)
console.log(`${38} = ${validarNota(38)}`)
console.log(`${39} = ${validarNota(39)}`)
console.log(`${40} = ${validarNota(40)}`)
console.log(`${81} = ${validarNota(81)}`)
console.log(`${82} = ${validarNota(82)}`)
console.log(`${83} = ${validarNota(83)}`)
console.log(`${84} = ${validarNota(84)}`)
console.log(`${85} = ${validarNota(85)}`)