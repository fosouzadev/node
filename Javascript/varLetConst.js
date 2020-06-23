// *** var : possui escopo global e de function, possui o Hoisting, onde é colocada antes de qualque expressão do codigo, podendo ser usada antes da linha em que foi declarada
var v1 = 'var global 1'

function testeVar() {
    var v1 = 'var function 1'
    var v2 = 'var function 2'
    console.log(v1)
}

console.log(v1)
//console.log(v2)  não localiza, está dentro da function
testeVar()

// permite redeclarar sem gerar erro, apenas atualiza o valor
var v1 = 'var global 1.0'
console.log(v1)


// *** let : possui escopo global, de bloco e de function

let l1 = 'let global 1'

function testeLet(){
    let l1 = 'let local 1'
    let l2 = 'let local 2'
    console.log(l1)
}

console.log(l1)
//console.log(l2)  não localiza, está dentro da function


// *** const : possui escopo global, de bloco e de function
// valor é definido na declaração e não pode ser alterado
const c1 = 'const global 1'

function testeConst(){
    const c1 = 'const local 1'
    const c2 = 'const local 2'
    console.log(c1)
}

console.log(c1)
//console.log(c2)  não localiza, está dentro da function