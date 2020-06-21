// o this pode variar, pode ser global ou objeto, depende de onde é chamada
function f1() { return this }
const f2 = function() { return this }

// o this sempre será o elemento onde a function foi declarada, nesse caso module.exports
const f3 = () => this

console.log('\n Teste global')
console.log('this === global', f1() === global) // true
console.log('this === global', f2() === global) // true
console.log('this === global', f3() === global) // false

console.log('\n Teste module.exports')
console.log('this === module.exports', f1() === module.exports) // false
console.log('this === module.exports', f2() === module.exports) // false
console.log('this === module.exports', f3() === module.exports) // true

// arrow function criada em objeto literal tem o this apontando para module.exports
const obj1 = {
    f1,
    f2,
    f3,
    f4: () => this
}

// arrow function criada em classe ou função construtora, tem o this apontando para o objeto
class Teste { f5 = () => this }
const obj2 = new Teste

console.log('\n Teste objeto')
console.log('this === global', obj1.f1() === global)   // false
console.log('this === global', obj1.f2() === global)   // false
console.log('this === global', obj1.f3() === global)   // false
console.log('this === global', obj1.f4() === global)   // false
console.log('this === global 2', obj2.f5() === global) // false

console.log('this === module.exports', obj1.f1() === module.exports)   // false
console.log('this === module.exports', obj1.f2() === module.exports)   // false
console.log('this === module.exports', obj1.f3() === module.exports)   // true
console.log('this === module.exports', obj1.f4() === module.exports)   // true
console.log('this === module.exports 2', obj2.f5() === module.exports) // false

console.log('this === obj', obj1.f1() === obj1)  // true
console.log('this === obj', obj1.f2() === obj1)  // true
console.log('this === obj', obj1.f3() === obj1)  // false
console.log('this === obj', obj1.f4() === obj1)  // false
console.log('this === obj2', obj2.f5() === obj2) // true