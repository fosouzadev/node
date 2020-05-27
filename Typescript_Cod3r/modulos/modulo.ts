// forma padrao de importar
import { PI, areaCircunferencia } from './circunferencia'

// podemos importar e atribuir um alias ao elemento
import { areaRetangulo as areaRet } from './retangulo'

// importando modulo com item default, nessa caso o elemento pode ter o nome que quisermos
import areaQuad from './quadrado'

console.log(areaRet(7, 8))
console.log(areaCircunferencia(2), PI)
console.log(areaQuad(5))


// utilizando módulos do padrão commonsJs, necessita da library @types/node
// const { digaOi } = require('./novo')
// console.log(digaOi('Felipe'))