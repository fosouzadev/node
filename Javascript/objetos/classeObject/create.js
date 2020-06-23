const pai = { nome: 'pedro', corCabelo: 'preto' }

const filho1 = Object.create(pai)
const filha2 = Object.create(pai, { nome: { value: 'bia', writable: false, enumerable: true } })

console.log('filho1', filho1, filho1.nome, filho1.corCabelo, Object.keys(filho1))
console.log('filha2', filha2, filha2.nome, filha2.corCabelo, Object.keys(filha2))

for (let attr in filha2)
    console.log(attr, filha2.hasOwnProperty(attr))  // retorna true se está diretamente no objeto, e false se veio por herança