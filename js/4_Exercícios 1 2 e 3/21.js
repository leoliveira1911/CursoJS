function planoSaude(idade) {
    let valor =  100
    let taxa = 0
    if (idade >= 0 && idade < 10) {
        taxa = 80
    } else if (idade>= 10 && idade <= 30) {
        taxa = 50
    } else if (idade > 30 && idade <= 60) {
        taxa = 95
    } else if (idade > 60 ){
        taxa = 130
    } else {
        console.log('Idade Inválida')
        taxa = NaN
    }
    let plano = valor + taxa

    return plano
}
console.log(planoSaude(1))
console.log(planoSaude(5))
console.log(planoSaude(10))
console.log(planoSaude(20))
console.log(planoSaude(30))
console.log(planoSaude(45))
console.log(planoSaude(60))
console.log(planoSaude(65))
console.log(planoSaude(99))
console.log(planoSaude(-1))