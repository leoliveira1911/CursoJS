const contadorA = require('./7-instanciaUnica')
const contadorB = require('./7-instanciaUnica')

const contadorC = require('./8-instanciaNova')()
const contadorD = require('./8-instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor , contadorD.valor)