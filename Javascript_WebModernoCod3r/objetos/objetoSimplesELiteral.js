// *** objeto simples com função construtora
const prod0 = new Object
prod0.nome = 'celular'
prod0.preco = 4849.33
prod0['desconto'] = 0.40
prod0.categorias = ['eletronicos', 'comunicação']
prod0.fabricante = { nome: 'Apple' }

console.log(prod0, prod0.desconto, prod0['nome'])

// *** notação literal de objeto
const prod1 = {}
prod1.nome = 'celular'
prod1.preco = 4849.33
prod1['desconto'] = 0.40
prod1.categorias = ['eletronicos', 'comunicação']
prod1.fabricante = { nome: 'Apple' }

const prod2 = {
    nome: 'celular',
    preco: 4884.33,
    ['desconto']: 0.40,
    categorias: ['eletronicos', 'comunicação'],
    fabricante: { nome: 'Apple' }
}

console.log(prod1, prod1.desconto, prod1['nome'])
console.log(prod2, prod2.desconto, prod2['nome'])


// *** excluir o atributo de um objeto
delete prod2.preco
console.log(prod2)


// *** tipos de functions em objeto literal
const obj = {
    f1() { },
    f2: function() { },
    f3: () => { }
}