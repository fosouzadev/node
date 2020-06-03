// *** var : possui escopo global e de function

var v1 = 'var global 1'

function testeVar() {
    var v1 = 'var function 1'
    var v2 = 'var function 2'
    console.log(v1)
}

console.log(v1)
//console.log(v2)  não localiza, está dentro da function
testeVar()

// *** let : possui escopo global, local e de function

let l1 = 'let global 1'

function tesetLet(){
    let l1 = 'let local 1'
    let l2 = 'let local 2'
    console.log(l1)
}

console.log(l1)
//console.log(l2)  não localiza, está dentro da function