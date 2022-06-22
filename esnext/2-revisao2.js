//Arrow Function

//Arrow function é uma função anônima, que sempre deve ser atribuida a uma constante.
const soma = (a,b) => a + b
console.log(soma(1,3))
//se não tiver corpo, não precisamos colocar return, mas se tiver corpo, precisamos do return!!
const subtracao = (a,b) => {
    return a - b
}
console.log(subtracao(3,1))

//Arrow function THIS
//o this está associado ao local onde a função foi escrita!
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//parametros Default
function log (texto = 'Node') {
    console.log(texto)
}
log()
log(undefined)
log(null)
log('Sou mais forte')

//operador rest 
function total(...numeros) {
    let total=0
    console.log(`Array formado pelos valores passados na função: [${numeros}]`)
    console.log(`Ex: elementos de índice 2 = ${numeros[2]}`)
    
    numeros.forEach(n => total += n)
    console.log('A função retorna o somatório dos números:')
    return total
}
console.log(total(2,3,4,5))