// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

type KeyItem<C, V> = {chave: C, valor: V}

class Mapa<C extends number, V extends string>{ 
    private _itens: Array<KeyItem<C, V>> = []

    public obter(chave: C) : KeyItem<C, V> | null{
        const item = this._itens.find(item => item.chave === chave)
        return item ? item : null
    }

    public colocar(item: KeyItem<C, V>): void {
        const itemEncontrado = this.obter(item.chave)

        if (!itemEncontrado)
            this._itens.push(item)
        else
            itemEncontrado.valor = item.valor
    }

    public imprimir() : void {
        this._itens.forEach(item => console.log(item))
    }

    public limpar() : void {
        this._itens = []
    }
}


const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
 
console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()