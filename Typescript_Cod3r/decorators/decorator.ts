// decorator é chamado sempre que a classe é carregada
// é possivel aplicar mais de um decorator na mesma classe

function decoratorVazio(_: Function) {}

@logarClasse
class Eletrodomestico1 {
    constructor() {
        console.log('novo...')
    }
}
function logarClasse(construtor: Function){
    console.log(construtor)
}


// Factory de decorator
@logarClasseSe(true)
class Eletrodomestico2 {
    constructor() {
        console.log('novo...')
    }
}
function logarClasseSe(valor: boolean){
    return valor ? logarClasse : decoratorVazio
}


//
@decorator({ a: 'abc', b: 3 })
class Eletrodomestico3 {
    constructor() {
        console.log('novo...')
    }
}

function decorator(obj : { a: string, b?: number }){
    return function(_: Function): void {
        console.log(obj.a + ' ' + obj.b)
    }
}