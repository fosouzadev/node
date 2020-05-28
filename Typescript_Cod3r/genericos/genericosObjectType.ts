// objetos literal
imprimir<{ nome: string, idade: number }>([
    { nome: 'Joao', idade: 44 },
    { nome: 'Maria', idade: 53 }
])

// type
type Fazendeiro = { nome: string, idade: number }
imprimir<Fazendeiro>([
    { nome: 'Joao', idade: 44 },
    { nome: 'Maria', idade: 53 }
])

// class
class Animal {
    constructor(public nome: string, public alimentacao: string){ }
}
imprimir<Animal>([ new Animal('Leão', 'Carne') ])


abstract class OperacaoBinaria<T, U, R> {
    constructor(public op1: T, public op2: U){ }

    abstract executar(): R
}

class SomaBinaria extends OperacaoBinaria<number, number, number> {
    executar(): number {
        return this.op1 + this.op2
    }
}
console.log(new SomaBinaria(4, 4).executar())


class Data {
    constructor(public dia: number = 0, public mes: number = 0, public ano: number = 0) { }
}
class DiferencaEntreDatas extends OperacaoBinaria<Data, Data, string>{  
    executar(): string {
        const t1 = new Date(this.op1.ano, this.op1.mes, this.op1.dia).getTime()
        const t2 = new Date(this.op2.ano, this.op2. mes, this.op2.dia).getTime()
        
        const diff = Math.abs(t1 - t2) // para a diferença não ficar negativa usamos Math.abs
        
        const milisegundosDeUmDia = 1000 * 60 * 60 * 24
        return `${Math.ceil(diff / milisegundosDeUmDia)} dia(s)`
    }
}
const difDt = new DiferencaEntreDatas(new Data(4, 7, 2020), new Data(1, 7, 2020))
console.log(difDt.executar())