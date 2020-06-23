// rest   : juntar
// spread : espalhar

/// *** objeto
console.log('\n [objeto] unir objetos')
const p1 = { nome: 'felipe', idade: 30, email: '' }
const pp1 = { ...p1, email: 'flp@test.com' }
console.log(pp1)


/// *** array
console.log('\n [array] unir arrays')
const a1 = [ 1, 2, 3, 4 ]
const aa1 = [ 0, ...a1, 5, 6]
console.log(aa1)

console.log('\n [array] parametros de functions')
function imprimeNumeros(...numeros) { console.log(numeros) }
imprimeNumeros(1, 2, 3, 4)
imprimeNumeros(...[1, 2, 3, 4])