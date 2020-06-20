// *** congelar objeto para que nao seja alterado

const pessoa = {
    nome: 'felipe',
    idade: 30
}

// permite tudo
pessoa.nome = 'felipe souza'
console.log(pessoa, 'Está congelado: ', Object.isFrozen(pessoa))

// congelar
Object.freeze(pessoa)

// não permite : editar, incluir e excluir atributo
pessoa.nome = 'felipe oliveira de souza'
pessoa.email = 'flp@teste.com'
delete pessoa.nome
console.log(pessoa, 'Está congelado: ', Object.isFrozen(pessoa))
