// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).
// Resposta : OK

function tipoTriangulo(l1, l2, l3) {
    if (l1 === l2 && l1 === l3)
        return 'Equilátero'
    
    if (l1 !== l2 && l1 !== l3 && l2 !== l3)
        return 'Escaleno'
    
    return 'Isósceles'
}

console.log(tipoTriangulo(5, 5, 5))
console.log(tipoTriangulo(5, 5, 2))
console.log(tipoTriangulo(1, 5, 5))
console.log(tipoTriangulo(5, 1, 5))
console.log(tipoTriangulo(5, 4, 3))