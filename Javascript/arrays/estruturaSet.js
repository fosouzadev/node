// estrutura que não aceita repetição, não indexado

console.log('\n forma 1 de criar')
const times = new Set()
times.add('vasco')
times.add('sao paulo').add('palmeiras')
times.add('vasco')

console.log(times)


console.log('\n forma 2 de criar')
const times2 = new Set([ 'sao paulo', 'criciuma' ])
console.log(times2)


console.log('\n verificar se uma chave está no map')
console.log(times.has('vasco'), times.has('vascooo'))


console.log('\n excluir um item no set')
times.delete('vasco')
console.log(times)


console.log('\n quantidade de itens do set')
console.log(times.size)


console.log('\n percorrer set foreach')
times.forEach((valor) => {
    console.log(valor)
})


console.log('\n percorrer set for of')
for (let item of times)
    console.log(item)