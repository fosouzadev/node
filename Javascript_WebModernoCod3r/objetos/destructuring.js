const pessoa = {
    nome: 'Felipe',
    idade: 30,
    endereco: {
        logradouro: 'Rua Abc',
        numero: 234
    },
    apelido: undefined
}

console.log('\nsimples')
const { nome, idade } = pessoa

console.log(nome, idade)


console.log('\nrenomeando os atributos extraidos')
const { nome: name, idade: age } = pessoa

console.log(name, age)


console.log('\nusando valor default, caso o item extraido não tenha valor ou não exista no objeto, assume o valor default ou undefined')
const { apelido = 'empty', dataNascimento, nome: n = 'fulano' } = pessoa

console.log(apelido, dataNascimento, n)


console.log('\natributos que são objetos')
const { endereco } = pessoa
const { endereco: { logradouro, numero } } = pessoa
const { endereco: { logradouro: rua, numero: num = 0 } } = pessoa

console.log(endereco, logradouro, numero, rua, num)


console.log('\nparametros de functions')
function getFullName({ nome, sobrenome }) {
    return `${nome} ${sobrenome}`
}

function getFullNameDefault({ nome: n = 'fulano', sobrenome = 'empty' } = {}) { // o proprio destructuring pode ter um objeto defaut
    return `${n} ${sobrenome}`
}

const p = { nome: 'felipe', sobrenome: 'souza' }

console.log(getFullName(p))
console.log(getFullName({}))

console.log(getFullNameDefault(p))
console.log(getFullNameDefault({}))
console.log(getFullNameDefault())