// 26) Fazer um programa para encontrar todos os pares entre 1 e 100.

function acharPares() {
    for (let i = 1; i <= 100; i++)
        if (i % 2 === 0)
            console.log(i)
}

//acharPares() // 0.161 a 0.166

// Resposta : OK, mas pode ser melhorado diminuindo as iterações do looping
function acharPares2() {
    for (let i = 2; i <= 100; i += 2)
        console.log(i)
}


acharPares2()