// O cardápio de uma lanchonete é o seguinte:
// Código Descrição do Produto Preço
// 100 Cachorro Quente R$ 3,00
// 200 Hambúrguer Simples R$ 4,00
// 300 Cheeseburguer R$ 5,50
// 400 Bauru R$ 7,50
// 500 Refrigerante R$ 3,50
// 600 Suco R$ 2,80
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente.
// Resposta: OK

const cardapio = [
    { codigo: 100, descricao: 'Cachorro Quente', valor: 3.00 },
    { codigo: 200, descricao: 'Hambúrguer Simples', valor: 4.00 },
    { codigo: 300, descricao: 'Cheeseburguer', valor: 5.50 },
    { codigo: 400, descricao: 'Bauru', valor: 7.50 },
    { codigo: 500, descricao: 'Refrigerante', valor: 3.50 },
    { codigo: 600, descricao: 'Suco', valor: 2.80 }
]

function calculaValorConta(codigo, qtde) {
    const produto = cardapio.filter(prod => prod.codigo === codigo)

    if (produto)
        return produto[0].valor * qtde
    
    throw 'Produto não existente'
}

console.log(calculaValorConta(400, 2))