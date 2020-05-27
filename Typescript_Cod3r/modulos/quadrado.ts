// ao exportar usando default, esse elemento se torna o padrao no import
// é permitido somente um item default no export
// utilizando default não precisamos dar um nome ao item, pode ser anônimo

export default function(base: number): number {
    return Math.pow(base, 2)
}

// export default function areaQuadrado(base: number): number {
//     return Math.pow(base, 2)
// }