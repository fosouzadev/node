const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
let aux

console.log('\n pop', 'remove ultimo', 'retorna ultimo')
aux = [...pilotos]
console.log(aux.pop(), aux)

console.log('\n push', 'insere no final', 'retorna novo tamanho')
aux = [...pilotos]
console.log(aux.push('Verstappen'), aux)

console.log('\n shift', 'remove primeiro', 'retorna primeiro')
aux = [...pilotos]
console.log(aux.shift(), aux)

console.log('\n unshift', 'insere no inicio', 'retorna novo tamanho')
aux = [...pilotos]
console.log(aux.unshift('Hamilton'), aux)

console.log('\n splice', 'define indice para alterar', 
                         'informa quantos excluir a partir desse indice',
                         'informa quantos adicionar a partir desse indice',
                         'retorna array de itens excluidos')
aux = [...pilotos]
console.log(aux.splice(2, 1, 'Bottas', 'Airton'), aux)

console.log('\n slice', 'retorna novo array a partir de intervalo de indices definidos')
aux = [...pilotos]
console.log(aux.slice(2, 4), aux)

console.log('\n concat', 'une arrays')
aux = [...pilotos]
console.log(aux.concat(pilotos))