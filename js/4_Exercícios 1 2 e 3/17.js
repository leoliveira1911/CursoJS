function aumentoSalarial (sal , plano) {
    let novoSalario
    switch (plano) {
        case ('A'):
            novoSalario = sal * 1.1
            break
        case ('B') :
            novoSalario = sal * 1.15
            break
        case ('C') :
            novoSalario = sal * 1.2
            break
        default :
            novoSalario = 'Plano inválido'
        }
        return novoSalario
    }
console.log(aumentoSalarial(2000.00 , 'A'))
console.log(aumentoSalarial(2000.00 , 'B'))
console.log(aumentoSalarial(2000.00 , 'C'))
console.log(aumentoSalarial(2000.00 , 'D'))
console.log(aumentoSalarial(2000.00 , 'E'))