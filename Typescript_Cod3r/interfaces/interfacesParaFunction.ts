// podemos representar functions como interfaces
interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number {
    // return Math.pow(base, exp)
    // return base ** exp
    return Array(exp).fill(base).reduce((acc, current) => acc * current)
}

console.log(potencia(10, 3))