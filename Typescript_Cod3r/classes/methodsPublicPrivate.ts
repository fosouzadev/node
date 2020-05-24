// classe com métodos
class Produto {
    constructor(public nome: string, public preco: number, public desconto: number = 0) { }

    public resumo(): string {
        return `${this.nome} custa R$ ${this.precoComDesconto()} (${this.desconto * 100}% off)`
    }

    // public no método tambem é opcional, por padrão sera publico
    precoComDesconto(): number {
        return this.preco * (1 - this.desconto)
    }
}
let produto1 = new Produto('Mouse', 70, 0.10)
let produto2 = new Produto('Teclado', 80)
console.log(produto1.resumo(), produto2.resumo())


// modificadores de acesso private em atributo e método
class Carro {
    private velocidadeAtual: number = 0

    constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) { }

    private alterarVelocidade(delta: number): number {
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
let carro1 = new Carro('Honda', 'City', 190)

for (let i: number = 1; i <= 38; i++)
    console.log(carro1.acelerar())

for (let i: number = 1; i <= 38; i++)
    console.log(carro1.frear())