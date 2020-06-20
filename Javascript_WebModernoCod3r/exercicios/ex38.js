// 38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
// ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
// para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
// Resposta Errada, corrigido

function print(inicio = 0, fim = 100) {
    if (inicio > fim ) {
        const aux = inicio
        inicio = fim
        fim = aux
    }

    if (inicio % 2 === 0) // seta inicio para o proximo impar
        ++inicio;

    console.log('inicio', inicio, 'fim', fim)

    while (inicio <= fim) {
        console.log(inicio)
        inicio += 2;
    }
}

//print()
//print(2, 10)
//print(3, 11)
print(19, 3)