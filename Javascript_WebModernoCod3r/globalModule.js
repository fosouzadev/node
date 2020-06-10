
console.log('\n Escopo global no node é o objeto global')
console.log(global === this)
console.log(global === module.exports)

console.log('\n Escopo de módulo, cada arquivo é um módulo')
console.log(this === module.exports)


// *** variávels existem localmente, não são inseridas em global e nem em module.exports
var n1 = 1
let n2 = 2
const n3 = 3

console.log('\n variaveis: global')
console.log(global.n1)
console.log(global.n2)
console.log(global.n3)

console.log('\n variaveis: module.exports')
console.log(module.exports.n1, this.n1)
console.log(module.exports.n2, this.n2)
console.log(module.exports.n3, this.n3)

// *** functions existem localmente, não são inseridas em global e nem em module.exports
function f1() { return 'f1' }
const f2 = function() { return 'f2' }
const f3 = () => 'f3'

console.log('\n functions: global')
console.log(!!global.f1)
console.log(!!global.f2)
console.log(!!global.f3)

console.log('\n functions: module.exports')
console.log(!!module.exports.f1)
console.log(!!module.exports.f2)
console.log(!!module.exports.f3)