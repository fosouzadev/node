// 12) Faça um algoritmo que calcule o fatorial de um número.
// Resposta: OK

const fatorial = (numero) => {
    if (numero == 0 || numero == 1)
        return 1
    
    let fatorial = numero

    for (let i = 1; i < numero; i++)
        fatorial *= numero - i

    return fatorial
}

for (let i = 0; i < 8; i++)
    console.log(i + ' ' + fatorial(i))