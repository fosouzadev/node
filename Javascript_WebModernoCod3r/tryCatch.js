
try {
    let pessoa = { nome: 'felipe' }
    console.log(pessoa.name.toUpperCase())

} catch (e) {
    console.log(typeof e)
    throw new Error(`${e.name} ${e.message} <<<`)
} finally {
    console.log('sempre executa')
}