// *** Exercicio 1 - Classe
// function Moto(nome) {
//     this.nome = nome
//     this.velocidade = 0

//     this.buzinar = function() {
//         console.log('Toooooooooot!')
//     }

//     this.acelerar= function(delta) {
//         this.velocidade = this.velocidade + delta
//     }
// }

class Moto {
    public velocidade: number = 0

    constructor(private _nome: string) { }

    get nome(): string { return this._nome }
    set nome(valor: string) { this._nome = valor }

    buzinar(): void { console.log('Toooooooooot!') }
    acelerar(delta: number) { this.velocidade += delta }
}

const moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)


// *** Exercicio 2 - Herança
// var objeto2D = {
//     base: 0,
//     altura: 0
// }
abstract class Objeto2D {
    public base: number = 0
    public altura: number = 0
    abstract area(): number
}

class Retangulo extends Objeto2D {
    public area(): number {
        return this.base * this.altura
    }
}

// var retangulo = Object.create(objeto2D)
const retangulo = new Retangulo
retangulo.base = 5
retangulo.altura = 7
// retangulo.area = function() {
//     return this.base * this.altura
// }
console.log(retangulo.area())


// *** Exercicio 3 - Getters & Setters
// var estagiario = {
//     _primeiroNome: ''
// }
// Object.defineProperty(estagiario, 'primeiroNome', {
//     get: function () {
//         return this._primeiroNome
//     },
//     set: function (valor) {
//         if (valor.length >= 3) {
//             this._primeiroNome = valor
//         } else {
//             this._primeiroNome = ''
//         }
//     },
//     enumerable: true,
//     configurable: true
// })
class Estagiario {
    private _primeiroNome: string = ''

    get primeiroNome(): string { return this._primeiroNome }
    set primeiroNome(valor: string) {
        this._primeiroNome = valor.length >= 3 ? valor : ''
    }
}

const estagiario: Estagiario = new Estagiario
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)