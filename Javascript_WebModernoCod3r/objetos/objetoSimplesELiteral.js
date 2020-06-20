// *** objeto simples com função construtora
const prod0 = new Object
prod0.nome = 'celular'
prod0.preco = 4849.33
prod0['desconto'] = 0.40
prod0.categorias = ['eletronicos', 'comunicação']
prod0.fabricante = { nome: 'Apple' }

console.log(prod0, prod0.desconto, prod0['nome'])


// *** objeto simples com método Object.create
const prod1 = Object.create(Object.prototype)
prod1.nome = 'celular'
prod1.preco = 4849.33
prod1['desconto'] = 0.40
prod1.categorias = ['eletronicos', 'comunicação']
prod1.fabricante = { nome: 'Apple' }

console.log(prod1)


// *** notação literal de objeto
const prod2 = {}
prod2.nome = 'celular'
prod2.preco = 4849.33
prod2['desconto'] = 0.40
prod2.categorias = ['eletronicos', 'comunicação']
prod2.fabricante = { nome: 'Apple' }

const prod3 = {
    nome: 'celular',
    preco: 4884.33,
    ['desconto']: 0.40,
    categorias: ['eletronicos', 'comunicação'],
    fabricante: { nome: 'Apple' }
}

console.log(prod2, prod2.desconto, prod2['nome'])
console.log(prod3, prod3.desconto, prod3['nome'])


// *** excluir o atributo de um objeto
delete prod3.preco
console.log(prod3)


// *** tipos de functions em objeto literal
const obj = {
    f1() { },
    f2: function() { },
    f3: () => { }
}