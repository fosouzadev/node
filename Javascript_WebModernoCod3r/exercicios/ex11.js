// 11) As regras para o cálculo dos anos bissextos são as seguintes:
// De 4 em 4 anos é ano bissexto;
// De 100 em 100 anos não é ano bissexto;
// De 400 em 400 anos é ano bissexto;
// Prevalecem as últimas regras sobre as primeiras.
// Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
// mensagem e retornando true ou false.
// Resposta: OK

const anoBissexto = (ano) => {
    if (ano % 400 === 0 || (ano % 100 !== 0 && ano % 4 === 0)) {
        console.log(`${ano} = sim`)
        return true
    }

    console.log(`${ano} = não`)
    return false
}

for (let i = 1900; i <= 2020; i++) {
    //console.log(`${i} ${i % 400} ${i % 100} ${i % 4}`)
    anoBissexto(i)
}