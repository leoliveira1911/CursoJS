const div400 = a => a%400 == 0
const div4 = a => a%4 == 0
const div100 = a => a%100 == 0

function anoBissexto (ano) {
    return (div400(ano) || div4(ano) && !div100(ano))
}
console.log(anoBissexto(2020))
console.log(anoBissexto(2100))
console.log(anoBissexto(2028))