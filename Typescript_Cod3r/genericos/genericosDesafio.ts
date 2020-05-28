class Fila<T> {
    private _fila: Array<T>

    constructor(...fila: Array<T>){ 
        this._fila = fila
    }

    public entrar(item: T) : void{
        this._fila.push(item)
        this.imprimir()
    }

    public proximo(): T | undefined{
        const item = this._fila.shift()
        this.imprimir()
        return item
    }

    private imprimir(){
        let fila = ''
        this._fila.forEach(item => fila += `${item}  `)
        console.log(fila)
    }
}

const fila: Fila<string> = new Fila

fila.entrar('felipe')
fila.entrar('sabrina')
fila.entrar('luiza')

console.log(`Em atendimento: ${fila.proximo()}`)
console.log(`Em atendimento: ${fila.proximo()}`)
console.log(`Em atendimento: ${fila.proximo()}`)
console.log(`Em atendimento: ${fila.proximo()}`)
