// *** enums
// inicia com 0, 1, 2
enum Cor { Cinza, Verde, Azul }
console.log(Cor, typeof Cor)

let minhaCor: Cor = Cor.Verde
console.log(minhaCor, typeof minhaCor)

// podemos definiros valores, iniciando em 10, 11, etc
enum Carros { City = 10, Corolla }
console.log(Carros, typeof Carros)