
class Cliente implements Humano {
    nome: string = ''
    idade?: number
    abc: any
    ultimaCompra: Date = new Date

    saudar(sobrenome: string): void {
        console.log(sobrenome)
    }
}

const cliente: Cliente = new Cliente
cliente.nome = 'Felipe'
cliente.idade = 30
cliente.abc = true
cliente.saudar('souza')
console.log(cliente)