/*
 Cada arquivo no node é um modulo, e para que elementos fiquem visíveis, devem ser exportados.
 this, exports e module.exports são o mesmo objeto que representa o módulo, porém:
 * this e exports: são variáveis que apontam para o mesmo objeto de module.exports
 * module.exports: objeto que realemnte será exportado
 Ao adicionar elementos em this, exports ou module.exports, o objeto é alterado e tudo ficara disponivel fora do módulo,
 porém quando criamos um objeto e atribuimos para this ou export, como são variaveis que apontam para o objeto module.exports,
 nosso objeto nao será exportado, só será exportado se for atribuido ao module.exports
*/

console.log(this === exports)              // true
console.log(this === module.exports)       // true     
console.log(exports === module.exports)    // true