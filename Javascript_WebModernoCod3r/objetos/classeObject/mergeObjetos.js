// *** merge de objetos, atributos repetidos iram ficar com o valor do ultimo objeto do parametro

const p1 = { 
    nome: 'felipe'
}
const p2 = { 
    idade: 30
}
const p3 = { 
    email: 'flp@teste.com', 
    nome: 'felipe souza'
}

const objMerge = Object.assign(p1, p2, p3)

console.log(objMerge)
console.log(objMerge.nome, objMerge.idade, objMerge.email)