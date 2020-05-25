// podemos criar a classe sem construtor, mas é necessário inicializar os atributos
class Data1 {
    // dessa forma os atributos são publicos, podemos colocar public para deixar explicito
    dia: number = 0
    public mes: number = 0   // apenas para deixar explicito
    ano: number = 0
}
let dt1 = new Data1()
console.log(dt1)


// com construtor, podemos opcionalmente colocar valores default nos parametros
class Data2 {
    dia: number
    mes: number
    ano: number

    constructor(dia: number = 0, mes: number = 0, ano: number = 0) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}
let dt2 = new Data2(13, 7, 1989)
console.log(dt2)
// podemos omitir os parenteses quando todos os parametros tem valor default
let dt3 = new Data2
console.log(dt3)


// forma resumida de criar a classe com construtor
// obtemos o mesmo resultado das classes anteriores
class Data3 {
    constructor(public dia: number = 0, public mes: number = 0, public ano: number = 0) { }
}
let dt4 = new Data3
console.log(dt4)


// construtor private, permite controlar como o objeto sera criado
class Unico {
    private static instance: Unico = new Unico

    private constructor() { }

    static getInstance(): Unico {
        return Unico.instance
    }

    agora() {
        return new Date
    }
}

console.log(Unico.getInstance().agora())