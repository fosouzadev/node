// *** callback, antes de promises

function esperar3s(callback: (dados:string) => void) {
    setTimeout(() => {
        callback('3s depois')
    }, 3000)
}

esperar3s(function(resultado: string) : void {
    console.log(resultado)
})


// *** promise
function esperar3sPromise() {
    return new Promise((resolve: any) => {
        setTimeout(() => {
            resolve('3s depois promise')
        }, 3000)
    })
}

esperar3sPromise().then(dado => console.log(dado))

// a vantagem da promise é o encadeamento de promises que podemos dar tratamentos adequados
fetch('https://swapi.dev/api/people/1')
    .then(res => res.json())
    .then(personagem => personagem.films)
    .then(films => fetch(films[0]))
    .then(resFilm => resFilm.json())
    .then(filme => console.log(`filme: ${filme.title}`))
    .catch(err => console.log(`catch: ${err}`))