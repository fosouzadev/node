const usuarios = [{ id: 1, nome: 'Felipe', dataNascimento: new Date }]
const telefones = [{ idUsuario: 1, telefone: '11 99855-4455', ddd: '11' }]
const enderecos = [{ idUsuario: 1, cep: '03494-344', logradouro: 'rua teste', number: 13 }]
const idUsuario = 1

function obterUsuario(idUsuario, callback) {
    setTimeout(() => {
        const usuario = usuarios.filter(usuario => usuario.id === idUsuario)

        if (usuario.length > 0)
            return callback(null, usuario[0])

        return callback('Usuario nao encontrado')
    }, 1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        const telefone = telefones.filter(tel => tel.idUsuario === idUsuario)

        if (telefone.length > 0)
            return callback(null, telefone[0])

        return callback('Usuario sem telefone')
    }, 1000)
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        const endereco = enderecos.filter(end => end.idUsuario === idUsuario)

        if (enderecos.length > 0)
            return callback(null, endereco[0])

        return callback('Usuario sem endereço')
    }, 1000)
}

const usuario = obterUsuario(idUsuario, (erro, usuario) => {
    if (erro) {
        console.log(erro)
        return
    }

    const telefone = obterTelefone(idUsuario, (erro, telefone) => {
        if (erro) {
            console.log(erro)
            return
        }

        const endereco = obterEndereco(idUsuario, (erro, endereco) => {
            if (erro) {
                console.log(erro)
                return
            }

            console.log('Usuario', usuario)
            console.log('Telefone', telefone)
            console.log('Endereço', endereco)
        })
    })
})
