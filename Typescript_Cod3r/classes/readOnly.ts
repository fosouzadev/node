// atributos readonly podem ser inicializados na declaração ou construtor

class Aviao {
    private readonly _qtdePassageiros = 50
    private readonly _potencia: number
    public readonly modelo: string

    constructor(
        potencia: number,
        modelo: string,
        public readonly prefixo: string
    ){
        this._potencia = potencia
        this.modelo = modelo
    }

    toString(): string {
        return `Qtde. Passageiros ${this._qtdePassageiros} Potencia ${this._potencia} Modelo ${this.modelo} Prefixo ${this.prefixo}`
    }
}

const aviao = new Aviao(500, 'F5', 'PT-ABC')

// nao permite alterar readonly
// aviao.modelo = ' '

console.log(aviao.toString())