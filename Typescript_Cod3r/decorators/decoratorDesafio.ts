// Desafio Decorator perfilAdmin
// naõ permitir instanciar a classe MudancaAdministrativa se usuário não for admin

// minha solução, errada, porque dessa forma o decorator é chamado somente quando a classe é carregada
// sendo que precisa ser validada a cada nova instancia que tentam criar
// function perfilAdmin(_: Function) : void {
//     console.log('validou')

//     if (!usuarioLogado || !usuarioLogado.admin)
//         throw new Error('Usuário não é admin')
// }

// professor, correto, incluido o comportamento no construtor, sendo validado a cada instancia que tentam criar
function perfilAdmin<T extends Construtor>(construtor: T) {
    return class extends construtor {
        constructor(...args: any[]) {
            super(...args)
            console.log('validou')

            if (!usuarioLogado || !usuarioLogado.admin)
                throw new Error('Sem permissão')
        }
    }
}

const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
}

@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}
 
new MudancaAdministrativa().critico()
new MudancaAdministrativa().critico()