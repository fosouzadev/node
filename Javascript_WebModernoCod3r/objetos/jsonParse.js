// *** conversões de json

const jsonObj = `
    {
        "nome": "felipe",
        "idade": 30
    }
`

// json para objeto
const pessoa = JSON.parse(jsonObj)
console.log(pessoa.nome, pessoa.idade)

// objeto para json
const serializeObj = JSON.stringify(pessoa)
console.log(serializeObj)