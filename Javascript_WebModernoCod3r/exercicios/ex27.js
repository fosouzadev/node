// 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
// Resposta: Não consegui fazer, melhorando com base no exercicio do professor

function calcCrescimento(altura1, txCresc1, altura2, txCresc2) {
    if (altura1 === altura2)
        return txCresc1 === txCresc2 ?
                'Crianças com a mesma altura e taxa de crescimento' :
               txCresc1 > txCresc2 ?
                'Crianças com a mesma altura, porém a criança 1 ultrapassará a criança 2 em um ano' :
                'Crianças com a mesma altura, porém a criança 2 ultrapassará a criança 1 em um ano'

    const anos = Math.abs((altura1 - altura2) / (txCresc1 - txCresc2))

    if (altura1 > altura2)
        return txCresc1 >= txCresc2 ?
                'Criança 2 é menor e nunca ultrapassará a criança 1' :
                `Criança 2 é menor, e alcançará a criança 1 em ${anos} ano(s)`
    
    return txCresc2 >= txCresc1 ? 
            'Criança 1 é menor e nunca ultrapassará a criança 2' :
            `Criança 1 é menor, e alcançará a criança 2 em ${anos} ano(s)`
}

console.log(110, 3, 110, 3, ' => ', calcCrescimento(110, 3, 110, 3))
console.log(110, 4, 110, 3, ' => ', calcCrescimento(110, 4, 110, 3))
console.log(110, 3, 110, 4, ' => ', calcCrescimento(110, 3, 110, 4))

console.log('\n')
console.log(150, 2, 130, 2, ' => ', calcCrescimento(150, 2, 130, 2))
console.log(150, 4, 130, 2, ' => ', calcCrescimento(150, 4, 130, 2))
console.log(150, 2, 130, 4, ' => ', calcCrescimento(150, 2, 130, 4))

console.log('\n')
console.log(130, 2, 150, 2, ' => ', calcCrescimento(130, 2, 150, 2))
console.log(130, 4, 150, 2, ' => ', calcCrescimento(130, 4, 150, 2))
console.log(130, 2, 150, 4, ' => ', calcCrescimento(130, 2, 150, 4))

/* Equação de 1º grau

    150 + 2x = 130 + 4x
    2x = -150 + 130 + 4x
    2x = -20 + 4x
    2x - 4x = -20
    -2x = -20
    x = -20 / 2
    x = -10

    150 + 2x = 130 + 4x
    150 - 130 + 2x = 4x
    20 + 2x = 4x
    20 = 4x - 2x
    20 = 2x
    20 / 2 = x
    10 = x

    150 - 130 / 4-2

1.  152     134
2.  154     138
3.  156     142
4.  158     146
5.  160     150
6.  162     154
7.  164     158
8.  166     162
9.  168     166
10. 170     170    
*/

console.log('\n')
console.log(90, 6, 125, 5, ' => ', calcCrescimento(90, 6, 125, 5))

/* Equação de 1º grau + Absolute

    90 + 6x = 125 + 5x
    90 -125 + 6x = 5x
    -35 + 6x = 5x
    -35 = 5x - 6x
    -35 = -1x
    -35 / -1 = x
    35

*/