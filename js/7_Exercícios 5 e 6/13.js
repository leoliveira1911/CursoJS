function filtroNum(vetor) {
    let resp = vetor.filter(num)
    return resp
}
//1
const num = e => typeof e ===  "number"
//2 -- as duas funções funcionam com o filter
function eNumero (e) {
    if (typeof e == typeof 0) {
        return e
    }
}

console.log([1.2, 4123, true, false, 'da', 1212].filter(eNumero))
console.log(filtroNum([1,2,'ds', '' , true , 3]))