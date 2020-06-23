// *** bloquear inclusão e exclusão de novos atributos, permite somente editar

const pessoa = {
    nome: 'felipe',
    idade: 30,
    sexo: 'M'
}

Object.seal(pessoa)

// permite editar atributos
pessoa.nome = 'felipe souza'

// não permite incluir e excluir atributos
pessoa.email = 'flp@teste.com.br'
delete pessoa.sexo

console.log(pessoa, 'Bloqueado extensão e exclusão:', Object.isSealed(pessoa))