const dados = Array(10000).fill(2)
let soma

console.time('for')
soma = 0
for (let i = 0; i < dados.length; i++) {
    soma += (dados[i] * 100 / 4 * 2)
}
console.log(soma)
console.timeEnd('for')

console.time('for in')
soma = 0
for (let i in dados) {
    soma += (dados[i] * 100 / 4 * 2)
}
console.log(soma)
console.timeEnd('for in')

console.time('for of')
soma = 0
for (let i of dados) {
    soma += (i * 100 / 4 * 2)
}
console.log(soma)
console.timeEnd('for of')

console.time('foreach')
soma = 0
dados.forEach(i => {
    soma += (i * 100 / 4 * 2)
})
console.log(soma)
console.timeEnd('foreach')