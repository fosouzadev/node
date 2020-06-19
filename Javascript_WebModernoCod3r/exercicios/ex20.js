// 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
// Resposta: OK

function saque(valor) {
    const calc = (valorAtual, valorNota) => {
        const qtdeNotas = Math.floor(valorAtual / valorNota)
        resultado += `${qtdeNotas} nota(s) de R$ ${valorNota}. `
        valorAtual -= qtdeNotas * valorNota
        return valorAtual
    }
    
    let resultado = ''

    if (valor >= 100)
        valor = calc(valor, 100)

    if (valor >= 50)
        valor = calc(valor, 50)
    
    if (valor >= 10)
        valor = calc(valor, 10)
    
    if (valor >= 5)
        valor = calc(valor, 5)

    if (valor >= 1)
        valor = calc(valor, 1)

    return resultado
}

console.log(saque(18))
console.log(saque(560))
console.log(saque(153))