// *** aplicando decorar no parametro do metodo
class ContaCorrente3 {
    private saldo: number

    constructor(saldo: number){
        this.saldo = saldo
    }

    sacar(@paramInfo valor: number){
        if (valor <= this.saldo){
            this.saldo -= valor
            return true
        }
        return false
    }

    getSaldo() {
        return this.saldo
    }
}

const cc3 = new ContaCorrente3(400)
cc3.sacar(4000)

// decorator de parametro, nao tem acesso ao valor
function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number) {
    console.log('alvo ' + alvo)
    console.log('metodo ' + nomeMetodo)
    console.log('indice ' + indiceParam)
}