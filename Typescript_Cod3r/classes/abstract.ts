// classes abstratas não podem ser instânciadas
// podem ter métodos abstratos ou concretos dentro de si que as classes filhas herdaram

abstract class Calculo {
    // atributos private no construtor ou no corpo da classe

    // atributos protected
    protected _resultado: number = 0

    // atributos públicos
    versao: string = '4.3'

    // construtor
    constructor(resultado: number, private _status: string){
        this._resultado = resultado
    }

    // métodos abstratos
    abstract executar(...numeros: number[]): void

    // métodos concretos
    getResultado(): number {
        return this._resultado
    }

    // propriedades get e set
    get status(): string {
        return this._status
    }
    set status(status: string) {
        this._status = status
    }
}

class Soma extends Calculo {
    // override de constructor
    constructor() {
        super(0, 'ok')
    }

    executar(...numeros: number[]): void {
        this._resultado = numeros.reduce((previous, current) => {
            console.log(`previous ${previous} current ${current}`)
            return previous + current
        })
    }
}

// nao pode ser instanciada
//const c = new Calculo

// classe soma herda o construtor e podeoms usar o polimorfismo
 const c1 = new Soma()
 c1.executar(4, 3, 2)
 console.log(c1.getResultado())
 console.log(c1.status, c1.versao)