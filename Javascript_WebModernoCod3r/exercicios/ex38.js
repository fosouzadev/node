// 38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
// ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
// para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.

function print(inicio = 0, fim = 100) {
    inicio = inicio > fim ? fim : inicio;
    fim = inicio > fim ? inicio : fim;

    if (inicio % 2 === 0)
        ++inicio;

    while (inicio <= fim) {
        console.log(inicio)
        inicio += 2;
    }
}

print()
print(2, 10)
print(3, 11)