function divisivelPorTres(valor) {
    resto = valor % 3
    /* if (resto == 0) {
        console.log(`O valor ${valor} é divisível por 3`)
    } else {
        console.log(`O valor ${valor} não é divisível por 3`)
    } */
    
    return resto == 0
}

console.log(divisivelPorTres(3))
console.log(divisivelPorTres(2))
console.log(divisivelPorTres(1))
console.log(divisivelPorTres(5))
console.log(divisivelPorTres(6))