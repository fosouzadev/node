
console.log('\n Escopo global no node é o objeto global')
console.log(global === this)
console.log(global === module.exports)

console.log('\n Escopo de módulo, cada arquivo é um módulo')
console.log(this === module.exports)