// *** array, possui typeof object
let hobbies1 = ['estudar', 'filmes']
console.log(hobbies1, typeof hobbies1)

// não permite trocar o tipo dos items internos, mesmo sem declarar tipo explicito
//hobbies1 = [4, 4]

// possui o mesmo comportamento do hobbies1
let hobbies2: string[] = ['estudar', 'filmes' ]
console.log(hobbies2, typeof hobbies2)


// *** array de tuplas
let enderecos1: [string, number][] = [['', 3], ['', 5]]
enderecos1.push(['rua A', 4])
console.log(enderecos1, typeof enderecos1)

// necessário inicializar com array vazio para entender que é um array de tuplas
let enderecos2: [string, number][] = []
enderecos2.push(['rua A', 4])
console.log(enderecos2, typeof enderecos2)