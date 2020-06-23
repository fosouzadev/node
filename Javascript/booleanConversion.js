// *** false
console.log('\n*** False ***')
console.log(!!'')
console.log(!!0)
console.log(!!null)
console.log(!!undefined)
console.log(!!NaN)


// *** true
console.log('\n*** True ***')
console.log(!!' ')
console.log(!!1)
console.log(!!-1)
console.log(!![])
console.log(!!{})
console.log(!!Infinity)


console.log('\n*** Retorna se consegue converter ou não o valor passado a function ***')
console.log(String(NaN),       !!String(NaN))
console.log(String(Infinity),  !!String(Infinity))
console.log(String(undefined), !!String(undefined))
console.log(String(null),      !!String(null))

console.log(Number(NaN),       !!Number(NaN))
console.log(Number(Infinity),  !!Number(Infinity))
console.log(Number(undefined), !!Number(undefined))
console.log(Number(null),      !!Number(null))


console.log('\n*** Usando variaveis em expressões logicas, retorna a primeira que retornar true ***')
console.log('' || NaN || undefined || 0 || 'a' || 4)


console.log('\n*** verificar se uma function existe em um objeto antes de chama-la ***')
const obj1 = { nome: 'felipe', exec: function() { return 'blz' } }
const obj2 = { nome: 'felipe' }
console.log(obj1.exec ? obj1.exec() : '')
console.log(obj2.exec ? obj2.exec() : 'nao tem')