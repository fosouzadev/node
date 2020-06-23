// *** criar objetos

function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome, salarioBase, faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const func = criarFuncionario('felipe', 15000, 0)

console.log(func, func.getSalario())