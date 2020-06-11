// por padrão toda function retorna undefined

// *** function comum
// functions desse tipo são carregadas antes de todo o codigo, podendo ser chamada antes de sua declaração
teste1()
function teste1() {
    console.log('teste1')
}


// *** function anonima
const teste2 = function() {
    console.log('teste2')
}


// *** arrow function
const teste3 = () => {
    console.log('teste3')
}