class Matematica {
    static PI: number = 3.1416

    static areaCirc(raio: number): number {
        // podemos acessar o item interno com this
        return this.PI * raio * raio

        // ou acessar usando o nome da classe, ambas as formas geram resultado correto
        //return Matematica.PI * raio * raio
    }
}

// não criamos instâncias de classes estáticas, pertencem a classe
console.log(Matematica.PI, Matematica.areaCirc(4))