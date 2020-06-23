// *** objetos literais
Object.prototype.autorTag = 'Flp'

const obj = new Object()
const autorObj = { }

console.log(obj.autorTag,      obj.__proto__ === Object.prototype)      // Flp true
console.log(autorObj.autorTag, autorObj.__proto__ === Object.prototype) // Flp true


// *** objetos de functions construtoras
function AutorFunc() { }
const autorFuncObj = new AutorFunc()

console.log(autorFuncObj.autorTag, autorFuncObj.__proto__ === AutorFunc.prototype) // Flp true


// *** Exemplo 1 de definição de herança
const avo   = { a: 'a' }
const pai   = { b: 'b', __proto__: avo }
const filho = { c: 'c', __proto__: pai }

console.log(filho)                     // { c: 'c' }
console.log(filho.a, filho.b, filho.c) // a b c


// *** Exemplo 2 de definição de herança
const avo2   = { a: 'a' }
const pai2   = { b: 'b' }
const filho2 = { c: 'c' }
 
Object.setPrototypeOf(filho2, pai2) 
Object.setPrototypeOf(pai2, avo2)   

console.log(filho2)                       // { c: 'c' }
console.log(filho2.a, filho2.b, filho2.c) // a b c