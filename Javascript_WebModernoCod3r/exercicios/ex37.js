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

// Resposta : OK, mas pode ser melhorada
function progressaoAritmetica2(n, a1, r) {
    let nums = []

    for (let i = 0; i < n; i++)
        nums.push(a1 + (r * i))

    // formula s = (qtdeTermos * (primeiroTermo + ultimoTermpo)) / 2
    const soma = (n * (a1 + nums[nums.length - 1])) / 2

    console.log('Aritimética', soma, nums)
}

function progressaoGeometrica2(n, a1, r) {
    let nums = []

    for (let i = 0; i < n; i++)
        nums.push(a1 * (r ** i))

    // q = razao elevada a qtdeTermos
    // s = (primeiroTermo * (q - 1)) / (razao - 1)
    const soma = (a1 * ((r ** n) - 1)) / (r - 1)

    console.log('Geométrica', soma, nums)
}

progressaoAritmetica2(10, 10, 15)

progressaoGeometrica2(10, 5, 3)