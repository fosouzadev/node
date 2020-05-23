// *** destructuring array

const caracteristicas = ['Motor Zetec 1.8', 2020]

// extrair valores do array para variáveis
const [motor, ano] = caracteristicas
console.log(motor, ano)


// *** desctructuring object
const item = { 
    nome: 'SSD 480GB', 
    preco: 200,
    caracteristicas : {
        w: 340,
        h: 43
    }
}

// extrair valores do objeto
const { nome, preco } = item
console.log(nome, preco)

// extrair valores do objeto com alias para as propriedades
const { nome: nomeItem, preco: precoItem } = item
console.log(nomeItem, precoItem)

// extrair subObjetos de um objeto, podemos tambem usar alias
const { caracteristicas : { h: heigth, w } } = item
console.log(w, heigth)