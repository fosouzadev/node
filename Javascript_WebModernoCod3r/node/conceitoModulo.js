// *** cada arquivo no node é um modulo, e para que elementos fiquem visíveis, devem ser exportados 
// this, exports e module.exports são o mesmo objeto que representa o módulo
// ao inserir algo nesse objeto, esse algo é exportado para ser usado em outro modulo
// para exportar objetos, devemo sempre utilizar o module.exports

console.log(this === exports)
console.log(this === module.exports)
console.log(exports === module.exports)