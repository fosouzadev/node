// ***

function Produto(nome, preco, desc) {
    this.nome = nome
    this.preco = preco
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const prod = new Produto('iphone', '2700', 0.1)
console.log(prod, prod.getPrecoComDesconto())