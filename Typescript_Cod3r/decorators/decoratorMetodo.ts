// **** incluindo metodo na classe
interface Eletrodomestico5 {
    imprimir() : void
}

@imprimivel
class Eletrodomestico5 {
    constructor() {
        console.log('novo...')
    }
}

function imprimivel(construtor: Function){
    construtor.prototype.imprimir = function() {
        console.log(`Imprimir`)
        console.log(this)
    }
}

new Eletrodomestico5().imprimir()


// *** bloqueando a alteração de método
class ContaCorrente1 {
    private saldo: number

    constructor(saldo: number){
        this.saldo = saldo
    }

    @congelar
    sacar(valor: number){
        if (valor <= this.saldo){
            this.saldo -= valor
            return true
        }
        return false
    }

    @congelar
    getSaldo() {
        return this.saldo
    }
}

const cc = new ContaCorrente1(10000)
cc.sacar(4000)
console.log(cc.getSaldo())

// caso alguem mau intencionado queira alterar o método de retorno de saldo, terá um erro, 
// porque bloqueamos através de um decorator
// cc.getSaldo = function() {
//     return this['saldo'] + 7000
// }

// decorator
function congelar(alvo: any, nomeMetodo: string, descritor: PropertyDescriptor){
    console.log(alvo)
    console.log(nomeMetodo)
    descritor.writable = false
}