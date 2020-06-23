const nums = [1, 2, 3, 4, 5]

console.log('\n map : transforma um array', 'retorna um novo array do mesmo tamanho')
console.log(nums.map((item, index, array) => item * 2))


console.log('\n filter : filtra os elementos de um array', 'retorna um novo array com os itens que atendem o filtro')
console.log(nums.filter((item, index, array) => item > 3))


console.log('\n reduce : retorna um unico item como resultado do processamento do loooping do array')
console.log(nums.reduce((valorAnt, valorAtual, index, array) => {
    return valorAnt + valorAtual
}, 0))