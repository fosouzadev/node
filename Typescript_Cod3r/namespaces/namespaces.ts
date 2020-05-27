// divisão logica para organizar o codigo e não ficar tudo em escopo global
// para utilizar fora do namespace é necessário exportar os elementos

namespace Area1 {
    const PI = 3.14

    export function circunferencia(raio: number): number {
        return PI * Math.pow(raio, 2)
    }

    export function retangulo(base: number, altura: number): number {
        return base * altura
    }
}

// não conflita com o PI interno do namespace
const PI = 2.99

// acessamos atraves do nome do namespace
console.log(Area1.circunferencia(10))
console.log(Area1.retangulo(10, 20))
console.log(PI)


// *** aninhar namespaces, para acessar os namespaces internos é necessário exportá-los
namespace Geometria1 {
    export namespace Area2 {
        const PI = 3.14

        export function circunferencia(raio: number): number {
            return PI * Math.pow(raio, 2)
        }

        export function retangulo(base: number, altura: number): number {
            return base * altura
        }
    }
}

// acessamos atraves do nome do namespace
console.log(Geometria1.Area2.circunferencia(10))
console.log(Geometria1.Area2.retangulo(10, 20))