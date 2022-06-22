function operacao (a, str, b) {
    let resultado = 0
    switch (str) {
        case '+' :
            resultado = a + b
            break
        case '-' :
            resultado = a - b
            break
        case '*' :
            resultado = a * b
            break
        case '/' :
            resultado = a / b
            break
        default:
            resultado = 'Operação inválida'
        }
    return resultado
}
console.log(operacao(10 , '+' , 2))
console.log(operacao(10 , '-' , 2))
console.log(operacao(10 , '*' , 2))
console.log(operacao(10 , '/' , 2))
console.log(operacao(10 , 'fsd' , 2))
console.log(operacao(10 , 'ad ad' , 2))

