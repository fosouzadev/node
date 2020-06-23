// 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
// todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
// Resposta: OK

function validar(str1, str2) {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()

    let v1 = true, v2 = true

    for (let i = 0; i < str1.length; i++)
        if (!str2.includes(str1[i])) {
            v1 = false
            break;
        }
    
    for (let i = 0; i < str2.length; i++)
        if (!str1.includes(str2[i])) {
            v2 = false
            break;
        }

    return v1 && v2
}

console.log(validar('romA', 'aMor'))
console.log(validar('aaaaaa', 'a'))
console.log(validar('aaaaaa', 'ab'))
console.log(validar('abc', 'cba'))