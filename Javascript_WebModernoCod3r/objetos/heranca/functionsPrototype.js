
// protype : objeto base
// protype.__proto__ : referencia ao objeto base

/*
    Function
        prototype [1]
        __proto__ [1]
    
    Object
        prototype 
        __proto__ [1]

    Pessoa
        __proto__ -> [1]
*/


console.log('\n Object')
console.log('__proto__           === Function.prototype           -> ', Object.__proto__ === Function.prototype)
console.log('prototype           === Function.prototype.__proto__ -> ', Object.prototype  === Function.prototype.__proto__)
console.log('prototype.__proto__ === null                         -> ', Object.prototype.__proto__ === null)

console.log('\n Function')
console.log('__proto__           === Function.prototype           -> ', Function.__proto__ === Function.prototype)
console.log('prototype.__proto__ === Object.prototype             -> ', Function.prototype.__proto__ === Object.prototype)

console.log('\n Function Pessoa')
function Pessoa(nome) { this.nome = nome }
console.log('__proto__           === Function.prototype           -> ', Pessoa.__proto__ === Function.prototype)