/// *** classes que sao convertidas em functions contrutoras
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    // function
    print() {
        console.log(this.nome, this.idade)
    }
}

const p = new Pessoa('felipe', 30)

console.log(p)
p.print()


// *** herança com classes
class Professor extends Pessoa {
    constructor(nome, idade, escola) {
        super(nome, idade)
        this.escola = escola
    }
}

console.log(new Professor('sabrina', 29, 'Ursinhos'))