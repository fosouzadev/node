// *** com array
const avaliacoes: Array<number> = [10, 9.3, 7.7]
const avaliacoes2: number[] = [10, 9.3, 7.7] // forma simples do generico acima

avaliacoes.push(8.4)
console.log(avaliacoes)

// tipos primitivos
imprimir([1, 2, 3])
imprimir<number>([1, 2, 3])
imprimir<string>(['ana', 'bia', 'carlos'])

// tupla
imprimir<[number, string, number]>([[ 4, '4', 5], [ 4, '4', 5]])