// *** congelar objeto para que nao seja alterado

const pessoa = {
    nome: 'felipe',
    idade: 30
}

// permite
pessoa.nome = 'felipe souza'
console.log(pessoa, 'Está congelado: ', Object.isFrozen(pessoa))

// congelar
Object.freeze(pessoa)

// não permite
pessoa.nome = 'felipe oliveira de souza'
console.log(pessoa, 'Está congelado: ', Object.isFrozen(pessoa))
