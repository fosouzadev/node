// *** spread
// espalha os valores de um array

// espalha os valores no parametro rest que agrupa os mesmos
const numbers = [1, 10, 99, -5, 200, 1034]
console.log(Math.max(...numbers))

// adicionar os itens de um array em outro array
const turmaA : string[] = ['joao', 'maria', 'fernanda']
const turmaB : string[] = ['fernando', ...turmaA, 'miguel', 'lorena']
console.log(turmaB)


// *** rest
// agrupaos valores em um array

// parametro rest que irá agrupar os valores em uma array
// parametro rest deve ser sempre o ultimo
function retornaArray(...args: number[]): number[] {
    return args
}
const numbers2 = retornaArray(1, 2, 3, 4)
console.log(numbers2)
const numbers3 = retornaArray(...numbers)
console.log(numbers3)

// pode ser utilizado tambem com tuplas
const tupla: [number, string, boolean] = [10, 'abc', true]

function tuplaParam1(a: number, b: string, c: boolean): void {
    console.log(`1) ${a} ${b} ${c}`)
}
tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string, boolean]) : void {
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}
tuplaParam2(...tupla)