const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
        return this
    },
    falar2: () => {
        console.log(!!this.saudacao)
        return this
    },
    falar3() {
        // this aponta para o objeto Timeout que executa a função enviada como callback
        setTimeout(function() {
            console.log(this.saudacao, this)
        }, 1000)
    },
    falar4() {
        // utilizamos o bind para corrigir o comportamento
        setTimeout(function() {
            console.log(this.saudacao, this)
        }.bind(pessoa), 1000)
    }
}

// this aponta para o objeto
console.log('\n Chamando pelo objeto')
console.log(pessoa.falar() === pessoa)
console.log(pessoa.falar2() === module.exports)


console.log('\n Chamando atribuindo function a constante')
// this aponta para global
const falar = pessoa.falar
console.log(falar() === global)

// this aponta para module.exports
const falar2 = pessoa.falar2
console.log(falar2() === module.exports)


console.log('\n Chamando atribuindo function a constante com bind')
// bind retorna outra function com o this apontando para onde queremos
const falarBind = pessoa.falar.bind(pessoa)
console.log(falarBind() === pessoa)

// não funciona com arrow functions, continua apontando para onde foi declarada
const falar2Bind = pessoa.falar2.bind(pessoa)
console.log(falar2Bind() === module.exports)


console.log('\n exemplo com setInterval dentro da function')
pessoa.falar3()
pessoa.falar4()