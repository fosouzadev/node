abstract class TestandoSuper {

    public tchau1?(): void
    public tchau2?(): void
}

class Testando extends TestandoSuper {
    public eai(nome: string) : void{
        console.log(`Eai ${nome}`)
    }

    public tchau1(): void {
        console.log('tchau1')
    }
}

const t1 = new Testando
t1.eai('mano')

// possui o método, mas pode não ter sido definido por ser opcional
// podemos verificar se existe antes de chamar
t1.tchau1 && t1.tchau1()
// ou
if (t1.tchau1)
    t1.tchau1()

t1.tchau2 && t1.tchau2()
// ou
if (t1.tchau2)
    t1.tchau2()
