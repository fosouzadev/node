// *** string -> number

let n1 = 1334.44
let n2 = 1234

console.log('\nconverter para string')
console.log(n1.toString())
console.log(`${n2}`)
console.log(String(n1))

console.log('\nconverter string para number explicita')
console.log(Number.parseInt('5681.4587'), parseInt('5681.4587'))
console.log(Number.parseFloat('45674.74'), parseFloat('45674.74'))
console.log(Number('45674.74'))

console.log('\nconverter string para number de forma implicita')
console.log('10' / 2)
console.log('10#' / 2)
console.log(Number.isNaN('10' / 2), Number.isNaN('10#' / 2))

console.log('\nconverter para outras bases')
console.log(n1.toString(2))     // binario
console.log(n1.toString(16))    // hexadecimal

console.log('\nfixar casas decimais')
console.log((n1 / 3).toFixed(2))

console.log('\nfixar tamanho do numero, nesse caso o número completo terá 6 digitos, juntanto o lado inteiro com o decimal')
console.log((n1 / 3).toPrecision(6))

console.log('\nverificar tipo')
console.log(typeof n1)
console.log(Number.isInteger(n1))
console.log(Number.isInteger(n2))

console.log('\ndivisão por zero retorna Infinity')
console.log(n1 / 0)
console.log((n1 / 0) === Infinity)
console.log(Number.isFinite(n1 / 0))

console.log('\nexponenciação')
console.log(Math.pow(n1, 2))
console.log(n1 ** 2)

console.log('\nproximo multiplo')
function proxMultiploDeCinco(nota) {
    // diferença do valor atual até o proximo multiplo
    const diferenca = 5 - (nota % 5)

    return nota + diferenca
}
console.log(proxMultiploDeCinco(30))
console.log(proxMultiploDeCinco(38))
console.log(proxMultiploDeCinco(88))
console.log(proxMultiploDeCinco(61))

// inverter sem usar variavel auxiliar
console.log('\ninverter valor de variaveis sem usar auxiliar')
console.log('antes', n1, n2)
n1 = n1 + n2 // 9
n2 = n1 - n2 // 9 - 5 = 4
n1 = n1 - n2 // 9 - 4 = 5
console.log('depois', n1, n2)

console.log('\nformatar para R$ PT-BR')
function converterReal(valor, incluirTipoMoeda){
    let valorFormatado

    if (incluirTipoMoeda)
        valorFormatado = valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    else
        valorFormatado = valor.toLocaleString('pt-br', { minimumFractionDigits: 2 })
                         
    return valorFormatado.replace('.', '#').replace(',', '.').replace('#', ',');
}

//com R$
console.log( converterReal(23450.30000000000000004, true) )

//sem R$
console.log( converterReal(23450.30000000000000004, false) )