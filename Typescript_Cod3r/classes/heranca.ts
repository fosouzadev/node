class Carro1 {
    private velocidadeAtual: number = 0

    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) { }

    // alteramos o modificador de acesso para protected, para a classe filha poder acessar
    protected alterarVelocidade(delta: number): number {
        let novaVelocidade = this.velocidadeAtual + delta

        this.velocidadeAtual = novaVelocidade < 0 ? 0 :
            novaVelocidade > this.velocidadeMaxima ? this.velocidadeMaxima :
                novaVelocidade

        return this.velocidadeAtual
    }

    public acelerar(): number {
        return this.alterarVelocidade(5)
    }

    public frear(): number {
        return this.alterarVelocidade(-5)
    }
}

// herança
class Ferrari extends Carro1 {
    // override de constructor, nesse caso não colocamos modificadores de acesso
    // pois os atributos já existem na classe base
    // esse parametros serao variaveis locais transmitidas ao construtor da classe mãe
    constructor(modelo: string, velocidadeMaxima: number = 200) {
        super('Ferrari', modelo, velocidadeMaxima)
    }

    // override do métodos acelerar e frear, porque possui comportamento diferente
    public acelerar(): number {
        return this.alterarVelocidade(20)
    }

    public frear(): number {
        return this.alterarVelocidade(-15)
    }
}

const f40 = new Ferrari('F40', 324)

for (let i: number = 1; i <= 6; i++)
    console.log(f40.acelerar())

for (let i: number = 1; i <= 3; i++)
    console.log(f40.frear())

console.log(f40)