// *** any
// permite colocar qualquer tipo de valor, e trocar o tipo em tempo de execução como no javascript
let carro : any = 'city'
console.log(carro, typeof carro)

carro = 345
console.log(carro, typeof carro)

// *** para que não ocorra a troca de tipo em tempo de execução, precisamos definir um tipo explicito
let salario1
salario1 = 15000
console.log(salario1, typeof salario1)

// como nõo foi definido um tipo na declaração da variável, permite trocar em tempo de execução
salario1 = '15000'
console.log(salario1, typeof salario1)

// para corrigir precisamos declarar algum tipo
let salario2 : number = 15000
console.log(salario2, typeof salario2)

// essa linha ira apontar um erro
//salario2 = '15000'