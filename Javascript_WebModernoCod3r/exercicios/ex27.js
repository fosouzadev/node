// 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

function calcCrescimento({ altura: altura1, txCresc: txCresc1 }, { altura: altura2, txCresc: txCresc2 }) {
    let analise = ''

    if (altura1 === altura2 && txCresc1 === txCresc2) {
        analise = 'Crianças com a mesma altura e taxa de crescimento'
        return analise
    }

    // ?????
}

console.log(calcCrescimento({ altura: 110, txCresc: 2 }, { altura: 100, txCresc: 3 }))