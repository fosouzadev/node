// *** if
if (true)
    console.log('ok')
else
    console.log('not ok')


// *** switch
switch(2){
    case 1: 
        console.log('igual a 1')
        break
    case 2: 
        console.log('igual a 2')
        break
    default:
        console.log('não achou')
}


// *** while
let cond = true
while (cond) {
    console.log('ok')
    cond = false
}


// *** do while
do {
    console.log('ok')
} while (cond)


// *** for 
for (let i = 0; i < 10; i++)
    console.log(i)


// *** for in, retorna o indice do array, e não o valor
const notas = [6, 7, 9, 8]
for (let i in notas)
    console.log(i, notas[i])

// *** for in, retorna o nome do atributo do objeto, e não o valor
const pessoa = { nome: 'felipe', idade: 30 }
for (let attr in pessoa)
    console.log(attr)

// *** for in, retorna o indice de cada item da string, e não o valor
const nome = 'felipe'
for (let i in nome)
    console.log(i, nome[i])


// *** foreach
const notas2 = [6, 7, 9, 8]
notas2.forEach((valor, indice, array) => {
    console.log(valor, indice, array)
})


// *** for of, retorna o valor de cada item do array
const notas1 = [6, 7, 9, 8]
for (let nota of notas1)
    console.log(nota)

// *** for of, retorna o valor de cada item da string
const nome1 = 'felipe'
for (let i of nome1)
    console.log(i)