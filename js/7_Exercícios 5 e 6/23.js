//assim
function contadorPalavras (str) {
    let vet = str.split(' ')
    return vet.length
}
//ou assim
const contadorPalavras2 = str => str.split(' ').length


console.log(contadorPalavras2('1 2 3 4 5 6 7 8 9 10 11 12'))