
function falarDepoisDe(segundos, frase, simularErro = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (simularErro)
                reject(`Erro : ${frase}`)
            else
                resolve(`Sucess : ${frase}`)
        }, segundos * 1000)
    })
}

const getFrases = async () => {
    const frase1 = await falarDepoisDe(2, 'tudo certo')
    const frase2 = await falarDepoisDe(2, 'ok')
    return [ frase1, frase2 ]
}

getFrases()
    .then(frases => console.log(frases))
    .catch(error => console.log(error))