// *** definir atributo com configurações personalizadas

const pessoa = {
    nome: 'felipe',
    idade: 30,
    peso: 80
}

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false,  // se irá aparecer ou ficará oculto
    writable: false,    // se pode ter seu valor alterado
    value: '13/07/1989' // valor padrao
})
pessoa.dataNascimento = '13/07/1990' // não permitiu editar, writable está false
console.log(pessoa.dataNascimento)   // consigo acessar mesmo estando oculto

// *** só aparece esse novo atributo se enumerable estiver como true
console.log(pessoa)
console.log('keys', Object.keys(pessoa))
console.log('values', Object.values(pessoa))
console.log('entries', Object.entries(pessoa))