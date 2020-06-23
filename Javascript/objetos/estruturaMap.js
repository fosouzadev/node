// recurso que premite criar uma estrutura similar ao objeto, com chave e valor
// não aceita repetição na chave

console.log('\n forma 1 de criar')
const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias)
console.log(tecnologias.get('react').framework)


console.log('\n forma 2 de criar')
const chaves = new Map([
    [function(){}, 'funcao'],
    [{}, 'objeto'],
    [123, 'numero']
])
console.log(chaves)
console.log(chaves.get(123))


console.log('\n verificar se uma chave está no map')
console.log(chaves.has(123))


console.log('\n excluir um item no map')
console.log(chaves.delete(123))
console.log(chaves)


console.log('\n quantidade de itens do map')
console.log(chaves.size)


console.log('\n percorrer map foreach')
tecnologias.forEach((valor, chave, items) => {
    console.log(valor, chave, items)
})


console.log('\n percorrer map for of')
for (let [ chave, valor ] of tecnologias.entries())
    console.log(chave, valor.framework)