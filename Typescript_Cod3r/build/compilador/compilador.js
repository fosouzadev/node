"use strict";
let canal = 'Gaveta';
let inscritos = 610234;
console.log(`Canal: ${canal}`);
// erro que impede o compilador de gerar o arquivo js, caso a configuração noEmitOnError seja igual a true
// canal = inscritos
// variavel ja foi declarada no arquivo string.ts, ocorre erro porque estamos no mesmo escopo, não há divisão de módulos
// let nome1: string = ''
// os parametros geram erro porque nao tem tipo definido, caso a configuração noImplicitAny esteja false o erro é omitido
// function calc(a, b) { return a + b } // gera erro porque o compilador não consegue identificar o tipo
let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc'; // essas três linhas não geram erro porque com o decorrer do código o compilador identifica que o tipo é any
// saudacao foi declarada e nao teve valor atribuido, gera erro caso a configuração seja true para strictNullChecks
// function saudar(isManha: boolean) : string{
//     let saudacao: string
//     if (isManha)
//         saudacao = 'Bom dia'
//     return saudacao
// }
// n esta como parametro da funciton mas não esta sendo usado, gera erro caso a configuração seja true para noUnusedParameters
//function testeParam(n : number) { console.log('teste')}
// a é uma variável local que não esta sendo utilizada, gera erro caso a configuração seja true para noUnusedLocals
//function testeLocal() { let a = 1; console.log('teste')}
//# sourceMappingURL=compilador.js.map