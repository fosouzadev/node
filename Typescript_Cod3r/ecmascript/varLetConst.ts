// *** var
// possui um comportamento chamado hoisting, que deixa a variável disponivel de forma global, podem ser usada até antes de sua declaração
// está limitada ao contexto global ou de function
console.log(testeVar)
var testeVar: any = 'var'



// *** let
// náo podemos usar antes de declarar, tem escolo local
let testeLet : string = 'let'
console.log(testeLet)