// *** notação literal de objeto
const prod1 = {}
prod1.nome = 'celular'
prod1.preco = 4849.33
prod1['desconto'] = 0.40

const prod2 = {
    nome: 'celular',
    preco: 4884.33,
    ['desconto']: 0.40
}

console.log(prod1, prod1.desconto, prod1['nome'])
console.log(prod2, prod2.desconto, prod2['nome'])


// *** excluir o atributo de um objeto
delete prod2.preco
console.log(prod2)