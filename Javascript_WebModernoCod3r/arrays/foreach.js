const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice}.${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach((fabricante, indice) => console.log(indice, fabricante))