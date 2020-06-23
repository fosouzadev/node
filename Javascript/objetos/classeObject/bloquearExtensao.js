// *** bloquear inclusão de atributos, permite excluir e editar atributos

const pessoa = Object.preventExtensions({
    nome: 'felipe',
    idade: 30,
    sexo: 'M'
})

// permite editar e excluir atributos
pessoa.nome = 'felipe souza'
delete pessoa.sexo

// não permite incluir atributos
pessoa.email = 'flp@teste.com.br'

console.log(pessoa, 'Permite extensão:', Object.isExtensible(pessoa))