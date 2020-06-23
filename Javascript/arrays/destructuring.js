const numbers = [10, 7, 9, 8]

console.log('\nsimples')
const [n1] = numbers
console.log(n1)


console.log('\nextrair varios indices, pula o indice 2')
const [a1, a2, , a3] = numbers
console.log(a1, a2, a3)


console.log('\nparametros de functions')
function getFullName([ nome, sobrenome ]) {
    return `${nome} ${sobrenome}`
}

function getFullNameDefault([ nome = 'fulano', sobrenome = 'empty' ] = []) { // o proprio destructuring pode ter um array defaut
    return `${nome} ${sobrenome}`
}

const p = [ 'felipe', 'souza' ]

console.log(getFullName(p))
console.log(getFullName([]))

console.log(getFullNameDefault(p))
console.log(getFullNameDefault([]))
console.log(getFullNameDefault())