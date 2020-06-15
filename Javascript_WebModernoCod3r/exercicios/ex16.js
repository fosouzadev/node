// 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
// como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores 
// numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
// 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.

const calculadora = (n1, op, n2) => {
    switch (op) {
        case '+':
            return n1 + n2
        case '-':
            return n1 - n2
        case '*':
            return n1 * n2
        case '/':
            return n1 / n2
        default:
            throw 'Operação inválida'
    }
}

console.log('+', calculadora(2, '+', 3))
console.log('-', calculadora(2, '-', 3))
console.log('*', calculadora(2, '*', 3))
console.log('/', calculadora(2, '/', 3))
console.log('@', calculadora(2, '@', 3))