// *** var
// possui um comportamento chamado hoisting, que deixa a variável disponivel no modulo, podem ser usada até antes de sua declaração
// está limitada ao contexto do modulo ou de function

console.log(testeVar1)      // consegue acessar por causa do hoisting
var testeVar1: any = 'var'

function funcTesteVar(): boolean {
    var testeVar2: boolean
    testeVar2 = true
    return testeVar2
}
// testeVar2 = true     // nao consegue acessar, só existe no escopo de function

if (true) {
    var testeVar3: boolean
}
testeVar3 = true        // consegue acessar, porque não esta restrito ao escopo de bloco


// *** let
// náo podemos usar antes de declarar
// está limitada ao contexto do modulo, de function e de bloco (if, for, etc)

let testeLet1: string = 'let'   // escopo de modulo
console.log(testeLet1)

function funcTesteLet(): boolean {
    let testeLet2: boolean
    testeLet2 = true
    return testeLet2
}
// testeLet2 = true     // nao consegue acessar, só existe no escopo de function

if (true) {
    let testeLet3: boolean = true
    console.log(testeLet3)
}
// testeLet3 = true        // nao consegue acessar, porque esta restrito ao escopo de bloco


// *** const
// náo podemos usar antes de declarar
// Ao ser declarada precisa ser obrigatoriamente inicializada, e não pode ser alterada
// está limitada ao contexto do modulo, de function e de bloco (if, for, etc)

const testeConst1: string = 'const'         // escopo de modulo
// testeConst1 = ''   // não permite alterar

function funcTesteConst(): boolean {
    const testeConst2 : boolean = true
    return testeConst2
}
// console.log(testeConst2)     // nao consegue acessar, só existe no escopo de function

if (true) {
    let testeConst3 : boolean = true
    console.log(testeConst3)
}
// console.log(testeConst3)     // nao consegue acessar, porque esta restrito ao escopo de bloco