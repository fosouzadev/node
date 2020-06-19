// 17) Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// A : 10%
// B : 15%
// C : 20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
// Resposta: OK

function aumento(plano, salario) {
    switch (plano) {
        case 'A':
            return salario * (1 + 0.1)
        case 'B':
            return salario * (1 + 0.15)
        case 'C':
            return salario * (1 + 0.2)
        default:
            throw 'Plano inválido'
    }
}

console.log(aumento('A', 10000))
console.log(aumento('B', 10000))
console.log(aumento('C', 10000))
console.log(aumento('D', 10000))