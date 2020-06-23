// executar como node entradaSaidaTerminal -a , caso teste anonimo

const anonimo = process.argv.indexOf('-a') !== -1

if (anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
}

process.stdout.write('Informe o seu nome: ')
process.stdin.on('data', data => {
    const nome = data.toString().replace('\n', '')
    console.log(nome)

    process.stdout.write('Fala ' + nome + ' !\n')
    process.exit()
})