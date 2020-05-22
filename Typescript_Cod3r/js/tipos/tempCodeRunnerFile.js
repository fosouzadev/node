"use strict";
let funcionario1 = {
    supervisores: ['felipe', 'sabrina'],
    baterPonto: //(h: number) => h <= 8 ? 'Ponto normal (<= 8)' : 'Fora do horário (> 8)'               // arrow function
    function (h) { return h <= 8 ? 'Ponto normal (<= 8)' : 'Fora do horário (> 8)'; } // function
};
console.log(funcionario1);
console.log(funcionario1.baterPonto(8));
console.log(funcionario1.baterPonto(9));
let funcionario2 = {
    supervisores: ['felipe', 'sabrina'],
    baterPonto(h) { return h <= 8 ? 'Ponto normal (<= 8)' : 'Fora do horário (> 8)'; }
};
console.log(funcionario2);
console.log(funcionario2.baterPonto(8));
console.log(funcionario2.baterPonto(9));
