// *** function
function funcTeste1(a: number, b: number): number { return a + b }
console.log(funcTeste1(2, 2))


// *** function anônima
const funcTeste2 = function(a: number, b: number) : number { return a + b }
console.log(funcTeste2(3, 3))


// *** arrow function, é sempre anônima e podemos opcionalmente declarar o retorno
const funcTeste3 = (a: number, b: number) => a + b
console.log(funcTeste3(5, 5))

const funcTeste4 = (a: number, b: number) : number => a + b
console.log(funcTeste4(5, 5))

const funcTeste5 = (a: number, b: number) : number => { return a + b }
console.log(funcTeste5(5, 5))

const funcTeste6 = () : void => console.log('arrow function sem parametros')
funcTeste6()


// *** parametro com valor default
// todos os tipos de function permitem parametros com valor default
// é possível utilizar como valor default de um parametro outro parametro

const paramPadrao1 = (a: number, b: string = 'abc') => console.log(a, b)
paramPadrao1(3)

// é recomendavel deixar os parametros com valor default por ultimo, caso contrario ocorre um unionType com undefined 
// nos outros parametros como abaixo
const paramPadrao2 = (a: number = 8, b: string) => console.log(a, b)
paramPadrao2(undefined, 'abc')

// usando outro parametro como valor default
const contagemRegressiva = (start: number = 5, end: number = start - 5) : void => {
    while (start >= end){
        console.log(start)
        start--
    }
}
contagemRegressiva()