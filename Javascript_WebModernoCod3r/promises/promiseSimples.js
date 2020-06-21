
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

falarDepoisDe(2, 'tudo certo')
    .then(frase => console.log(frase))

falarDepoisDe(2, 'ops', true)
    .catch(error => console.log(error))


// encadear varias promises
Promise.all([ falarDepoisDe(2, 'tudo certo'), falarDepoisDe(2, 'ok') ])
    .then(frases => console.log(frases))
    .catch(error => console.log(error))

Promise.all([ falarDepoisDe(2, 'tudo certo'), falarDepoisDe(2, 'ops', true) ])
    .then(frases => console.log(frases))
    .catch(error => console.log(error))