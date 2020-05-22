// *** funções possuem tambem os tipo definidos nos seus parâmetros e retorno
function hello() : string {
    return 'Hello'
}

function sum(a: number, b: number) : number {
    return a + b;
}

function notReturn(name: string) : void {
    console.log(name)
}

console.log(hello())
console.log(sum(1, 3))
notReturn('felipe')


// atribuição de functions a variaveis
// definimos na variavel, a assinatura da function que espera receber
let ola: () => string
ola = hello
console.log(ola())

let soma: (n1: number, n2: number) => number
soma = sum
console.log(soma(1, 3))

let semRetorno: (nm: string) => void
semRetorno = notReturn
semRetorno('felipe')