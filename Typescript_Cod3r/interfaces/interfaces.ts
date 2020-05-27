interface Humano {
    nome: string

    // atributo opcional
    idade?: number

    // atributo com nome dinâmico, é opcional
    [prop: string]: any

    // metodo obrigatorio
    saudar(sobrenome: string) : void

    // metodo opcional, adicionamos apos o nome ?
    ola?(nome: string) : void
}

function saudarComOla(pessoa: Humano){
    console.log(`Olá, ${pessoa.nome}`)
}

function mudarNome(pessoa: Humano){
    pessoa.nome = 'Joana'
}

const pessoa1 = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome:string):void { console.log(sobrenome) }
}

saudarComOla(pessoa1)
mudarNome(pessoa1)
saudarComOla(pessoa1)

const pessoa2 = {
    nome: 'Paulo',
    saudar(sobrenome:string):void { console.log(sobrenome) }
}

// nao tem a propriedade idade porque é opcional
saudarComOla(pessoa2)
saudarComOla({ nome: 'Juca', saudar(sobrenome:string):void { console.log(sobrenome) } })


const pessoa3 = {
    nome: 'Felipe',
    abc: 'teste',
    saudar(sobrenome:string):void { console.log(sobrenome) }
}

// possui um atributo dinâmico
saudarComOla(pessoa3)
saudarComOla({ nome: 'Sabrina', idade: 40, abc: true, saudar(sobrenome:string):void { console.log(sobrenome) } })
