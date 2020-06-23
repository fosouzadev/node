// 39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
// primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
// Faça a troca sem utilizar uma variável auxiliar.
// Resposta: não consegui fazer, implementado com o codigo do professor

function troca(vetor1 = [], vetor2 = []) {
    console.log('antes', vetor1, vetor2);

    for (let i = 0; i < vetor1.length; i++) {
        vetor1[i] = vetor1[i] + vetor2[i]
        vetor2[i] = vetor1[i] - vetor2[i]
        vetor1[i] = vetor1[i] - vetor2[i]
    }

    console.log('depois', vetor1, vetor2);
}

troca([1, 2, 3], [4, 5, 6])

// inverter sem usar variavel auxiliar
let n1 = 4, n2 = 5

n1 = n1 + n2 // 9
n2 = n1 - n2 // 9 - 5 = 4
n1 = n1 - n2 // 9 - 4 = 5

console.log(4, 5, n1, n2)