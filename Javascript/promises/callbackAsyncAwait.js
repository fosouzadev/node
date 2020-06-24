const usuarios = [{ id: 1, nome: 'Felipe', dataNascimento: new Date }]
const telefones = [{ idUsuario: 1, telefone: '11 99855-4455', ddd: '11' }]
const enderecos = [{ idUsuario: 1, cep: '03494-344', logradouro: 'rua teste', number: 13 }]
const idUsuario = 1

function obterUsuario(idUsuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuario = usuarios.filter(usuario => usuario.id === idUsuario)

            if (usuario.length > 0)
                return resolve(usuario[0])

            return reject('Usuario nao encontrado')
        }, 1000)
    })
}

function obterTelefone(idUsuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const telefone = telefones.filter(tel => tel.idUsuario === idUsuario)

            if (telefone.length > 0)
                return resolve(telefone[0])

            return reject('Usuario sem telefone')
        }, 1000)
    })
}

function obterEndereco(idUsuario) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const endereco = enderecos.filter(end => end.idUsuario === idUsuario)

            if (enderecos.length > 0)
                return resolve(endereco[0])

            return reject('Usuario sem endereço')
        }, 1000)
    })
}

const getClient = async () => {
    try {
        const result = await Promise.all([
            obterUsuario(idUsuario),
            obterTelefone(idUsuario),
            obterEndereco(idUsuario)
        ])

        return { ...result[0], ...result[1], ...result[2] }
    } catch (error) {
        return `*error: ${error}`
    }
}

getClient()
    .then(cliente => console.log(cliente))
    .catch(erro => console.log(erro))