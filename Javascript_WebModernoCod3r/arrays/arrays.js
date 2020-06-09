const numbers = [1, 2, 3, 4, 5]

console.log('\narray é um object')
console.log(typeof numbers)

console.log('\nadicionar item no final do array')
numbers.push(6)
numbers.push(7, 8)
console.log(numbers)

console.log('\nremover item no final do array')
console.log(numbers.pop())
console.log(numbers)

console.log('\ndeletar o valor de um indice, deixando-o com o valor undefined')
delete numbers[0]
console.log(numbers)
console.log(numbers[0])