
class Pessoa {
    private _idade: number = 0

    // propriedades get e set
    get idade(): number {
        return this._idade
    }

    set idade(valor: number) {
        if (valor >= 0 && valor <= 120)
            this._idade = valor
    }
}

const p1 = new Pessoa
p1.idade = 30          // set
console.log(p1.idade)  // get

p1.idade = 150         // set
console.log(p1.idade)  // get