// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.

const pow = (b, e) => Math.pow(b, e)

console.log(pow(5, 2))

// Resposta : Ok, porem tem uma forma nova

const pow2 = (b, e) => b ** e

console.log(pow2(5, 2))