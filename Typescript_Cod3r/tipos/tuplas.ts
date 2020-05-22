// *** tuplas, estrutura parecida com array, porem com tipos bem definios, inclusive pela ordem
let endereco1: [string, number, string] = ['Rua Teste', 123, 'Bairro Teste']
console.log(endereco1, typeof endereco1)

// essa linha ira pontar erro no item do meio, pois não é do tipo number
//endereco1 = ['a', 'b', 'c']