// *** objetc

let usuario1 = { nome: 'felipe', idade: 30 }
console.log(usuario1, typeof usuario1)

// como a estrutura do objeto foi definido na declaracao com a inicialização, não podemos trocar a estrutura do objeto
// usuario1 = { abc: '' }


// podemos definir de forma explicita os tipos
let usuario2: { nome: string, idade: number }
usuario2 = { nome: 'felipe', idade: 30 }
console.log(usuario2, typeof usuario2)


// é preferivel utilizar a definiçõo do objeto na declaração com inicialização ou na tipagem explicita
// pois da forma abaixo a variavel aceita qualquer estrutura de objeto como no javascript
let usuario3
usuario3 = { nome: 'felipe', idade: 30 }
usuario3 = { abc: '' }


// Objetos com propriedades e functions
let funcionario1:
    {
        supervisores: string[],
        baterPonto: (hora: number) => string
    } = {
        supervisores: ['felipe', 'sabrina'],
        baterPonto: //(h: number) => h <= 8 ? 'Ponto normal (<= 8)' : 'Fora do horário (> 8)'               // arrow function
                    function(h: number) { return h <= 8 ? 'Ponto normal (<= 8)' : 'Fora do horário (> 8)'}  // function
    }

console.log(funcionario1)
console.log(funcionario1.baterPonto(8))
console.log(funcionario1.baterPonto(9))

let funcionario2:
    {
        supervisores: string[],
        baterPonto: (hora: number) => string
    } = {
        supervisores: ['felipe', 'sabrina'],
        baterPonto(h: number): string { return h <= 8 ? 'Ponto normal (<= 8)' : 'Fora do horário (> 8)' } // outra foram de definir a function
    }

console.log(funcionario2)
console.log(funcionario2.baterPonto(8))
console.log(funcionario2.baterPonto(9))


// Podemos criar um alias para um tipo, para não repetir a definição do tipo como fizemos em funcionario1 e funcionario2

type Funcionario = {
    supervisores: string[],
    baterPonto: (hora: number) => string
}

// assim podemos criar vários funcionarios sem duplicar a definição da estrutura
let funcionario3: Funcionario = {
        supervisores: ['felipe', 'sabrina'],
        baterPonto(h: number): string { return h <= 8 ? 'Ponto normal (<= 8)' : 'Fora do horário (> 8)' } // outra foram de definir a function
    }