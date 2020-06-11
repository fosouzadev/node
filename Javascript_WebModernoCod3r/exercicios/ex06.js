// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples(capital, txJuros, tempo) {
    return capital * (1 + txJuros * tempo)
}

function jurosComposto(capital, txJuros, tempo) {
    return capital * Math.pow(1 + txJuros, tempo)
}

console.log(jurosSimples(1000, 0.08, 2))
console.log(jurosComposto(10000, 0.10, 3))