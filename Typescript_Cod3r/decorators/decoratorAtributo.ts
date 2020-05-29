// *** bloqueando valores negativos na propriedade
class ContaCorrente2 {
    @naoNegativo
    private saldo: number

    constructor(saldo: number){
        this.saldo = saldo
    }

    sacar(valor: number){
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

const cc2 = new ContaCorrente2(-499)  // gera exception pela validação do decorator

// decorator
// substitui o atributo por uma propriedade com get e set com validações
function naoNegativo(alvo:any, nomePropriedade: string){
    delete alvo[nomePropriedade]
    Object.defineProperty(alvo, nomePropriedade, {
        get: function() : any { return alvo[`_${nomePropriedade}`]},
        set: function(valor: any): void {
            if (valor < 0)
                throw new Error('Saldo inválido')
            else
                alvo[`_${nomePropriedade}`] = valor
        }
    })
}