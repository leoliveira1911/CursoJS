//estrategia 1 para gerar valor padrao

function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1()) //usou o valor padrao em todos
console.log(soma1(1, 2, 3))
console.log(soma1(0, 0, 0)) //nção funciona nesse metodo

function soma2 (a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b: 1 //coloca o indice do argumento (a seria 0, b = 1 e c = 2)
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(soma2())
console.log(soma2(3))
console.log(soma2(1, 2, 3))
console.log(soma2(0, 0, 0))

//valor padrão do es2015 - USAR ESSE JEITO.
function soma3 (a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3())
console.log(soma3(3))
console.log(soma3(2, 4, 6))
console.log(soma3(0, 0, 0))