// adicionando ação quando uma classe for instanciada, 
// comportamento foi incluido no construtor

@logarObjeto
class Eletrodomestico4 {
    constructor(){
        console.log('novo...')
    }
}

// tipo com construtor generico
type Construtor = { new(...args: any[]): {} }

function logarObjeto(construtor: Construtor){
    console.log('Carregado...')
    return class extends construtor {
        constructor(...args: any[]){
            console.log('Antes...')
            super(...args)
            console.log('Depois')
        }
    }
}

new Eletrodomestico4