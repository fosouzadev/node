// 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos as pontuações feitas por jogo. Após cada jogo ele anota o novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo).

// Obs.: O primeiro jogo não conta como novo recorde do melhor.
// Exemplo:
// String: “10 20 20 8 25 3 0 30 1”
// Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
// aconteceu no sétimo jogo.)

function analiseJogos(pontos) { // 0.158 a 0.165
    let menorPontuacao
    let maiorPontuacao
    let jogoComMenorPontuacao
    let qtdeBateuRecorde = 0

    for (let i = 0; i < pontos.length; i++) {
        if (i == 0) {
            menorPontuacao = pontos[i]
            maiorPontuacao = pontos[i]
            jogoComMenorPontuacao = i + 1
            continue
        }

        if (pontos[i] < menorPontuacao) {
            menorPontuacao = pontos[i]
            jogoComMenorPontuacao = i + 1
        }

        if (pontos[i] > maiorPontuacao) {
            maiorPontuacao = pontos[i]
            ++qtdeBateuRecorde
        }
    }

    return [qtdeBateuRecorde, jogoComMenorPontuacao]
}

function analiseJogos2(pontos) {
    let menorPontuacao = Math.min(...pontos)
    let maiorPontuacao = 0
    let qtdeBateuRecorde = 0

    pontos.reduce((previous, current) => { 
        if (current > previous) {
            maiorPontuacao = current
            ++qtdeBateuRecorde
        }
        return maiorPontuacao
    })

    return [
        qtdeBateuRecorde,
        pontos.indexOf(menorPontuacao) + 1
    ]
}

console.log(analiseJogos2([10, 20, 20, 8, 25, 3, 0, 30, 1])) // 3 , 7
console.log(analiseJogos2([10, 5, 50, 4, 25, 3, 5, 30, 19])) // 1 , 6