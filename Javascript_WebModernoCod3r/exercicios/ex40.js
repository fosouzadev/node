// 40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
// modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
// conceito B e de 9,0 a 10,0 o conceito A.

function conceitoDaNota(notas = []) {
    notas.forEach(nota => {
        console.log(nota, 
            nota < 0 ? 'Nota inválida' :
            nota < 5 ? 'D' :
            nota < 7 ? 'C' :
            nota < 9 ? 'B' : 
            nota < 11 ? 'A' : 'Nota inválida')
    })
}

conceitoDaNota([ -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])