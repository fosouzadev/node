function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // metodos publicos
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima)
            velocidadeAtual += delta
        else
            velocidadeAtual = velocidadeMaxima
    }

    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

// *** podemos instaciar a function e criar um objeto
const bmw = new Carro(250, 20)
bmw.acelerar()
bmw.acelerar()
bmw.acelerar()
console.log(bmw.getVelocidadeAtual())


// *** como o this da function aponta para global, temos que tomar cuidado, pois ao chamar a function ao invés de instanciar estaremos adicionando os métodos publicos
// dentro da global
Carro()
console.log(global.getVelocidadeAtual())