// uma alternativa ao bind, mas que ao invés de retornar uma nova function, permite já passar os parametros para execução

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'iPhone 11',
    preco: 4589,
    desc: 0.1,
    getPreco
}

// chamando a function diretamente não encontra preco e desc, porque o this aponta para global
console.log(getPreco()) 

// chamando pelo objeto o comportamento é correto, porque o this aponta para o objeto
console.log(produto.getPreco())

// bind retorna uma nova function
console.log(getPreco.bind(produto)(0.1, 'R$'))

// call ja executa e recebe os parametros como rest
console.log(getPreco.call(produto, 0.1, 'R$'))

// apply já executa e recebe os parametros como array
console.log(getPreco.apply(produto, [ 0.1, 'R$' ]))
