// *** usando generics
// é exclusivo do typescript
function echo<T>(objeto: T): T {
    return objeto
}

function imprimir<T>(args: T[]){
    args.forEach(item => console.log(item))
}

console.log(echo('Joao').length)
console.log(echo<number>(27))
console.log(echo({ nome: 'João', idade: 27 }))


// *** métodos anonimos generics
type newEcho = <T>(data: T) => T

const chamarNewEcho1: newEcho = echo
const chamarNewEcho2: newEcho = <T>(objeto: T) => objeto

console.log(chamarNewEcho1<string>('algo'))
console.log(chamarNewEcho2<string>('algo'))