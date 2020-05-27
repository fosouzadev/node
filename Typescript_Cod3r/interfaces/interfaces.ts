interface Humano {
    nome: string

    // atributo opcional
    idade?: number

    // atributo com nome dinâmico dinânico
    [prop: string]: any
}

function saudarComOla(pessoa: Humano){
    console.log(`Olá, ${pessoa.nome}`)
}

function mudarNome(pessoa: Humano){
    pessoa.nome = 'Joana'
}

const pessoa1 = {
    nome: 'João',
    idade: 27
}

saudarComOla(pessoa1)
mudarNome(pessoa1)
saudarComOla(pessoa1)

const pessoa2 = {
    nome: 'Paulo'
}

// nao tem a propriedade idade porque é opcional
saudarComOla(pessoa2)
saudarComOla({ nome: 'Juca' })


const pessoa3 = {
    nome: 'Felipe',
    abc: 'teste'
}

// possui um atributo dinâmico
saudarComOla(pessoa3)
saudarComOla({ nome: 'Sabrina', idade: 40, abc: true })
