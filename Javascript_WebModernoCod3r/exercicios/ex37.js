// 37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
// como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
// bem como a soma dos elementos.

function progressaoAritmetica(n, a1, r) {
    let soma = a1
    let nums = [ a1 ]

    for (let i = 1; i < n; i++) {
        a1 = a1 + r
        soma += a1
        nums.push(a1)
    }

    console.log(soma, nums)
}

function progressaoGeometrica(n, a1, r) {
    let soma = a1
    let nums = [ a1 ]

    for (let i = 1; i < n; i++) {
        a1 = a1 * r
        soma += a1
        nums.push(a1)
    }

    console.log(soma, nums)
}

progressaoAritmetica(4, 1, 4)
progressaoAritmetica(4, 2, 4)

progressaoGeometrica(6, 2, 2)