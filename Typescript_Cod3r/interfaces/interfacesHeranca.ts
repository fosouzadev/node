// *** herança entre interfaces
interface A {
    a() : void
}

interface B {
    b() : void
}

interface ABC extends A, B {
    c() : void
}


// *** classe implementado mais de uma interface
class RealAB implements A, B {
    a(): void {}
    b(): void {}
}

class RealABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}


// *** passando como parametro
function testeInterface(b: B): void {
    b.b()
}

testeInterface(new RealAB)
testeInterface(new RealABC)


// *** classe abstrata
abstract class AbstrataABD implements A, B {
    a(): void {}
    b(): void {}
    abstract d(): void
}

class ABD extends AbstrataABD {
    d(): void { }
}

testeInterface(new ABD)


// *** quando redeclaramos uma interface existente, todos os itens são acumulados na interface
interface X {
    xString() : void
}

interface X {
    yString() : void
}

class Z implements X {
    xString(): void {
        throw new Error("Method not implemented.")
    }
    yString(): void {
        throw new Error("Method not implemented.")
    }
}

// assim podemos adicionar itens a interface Object
interface Object { 
    log(): void
}

Object.prototype.log = function() { console.log(this.toString()) }

let num: number = 5
let letter: string = 'F'
let condi: boolean = true

num.log()
letter.log()
condi.log()