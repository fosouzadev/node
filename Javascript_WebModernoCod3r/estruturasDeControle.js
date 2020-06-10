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
