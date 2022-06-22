function conceito(notas) {
    for (let i = 0 ; i < notas.length ; i++) {
        switch(Math.floor(notas[i])){
            case 10:
            case 9:
                console.log(`A nota ${notas[i]} possui conceito A`)
                break
            case 8:
            case 7:
                console.log(`A nota ${notas[i]} possui conceito B`)
                break
            case 6:
            case 5:
                console.log(`A nota ${notas[i]} possui conceito C`)
                break
            case 4:
            case 3:
            case 2:
            case 1:
            case 0:
                console.log(`A nota ${notas[i]} possui conceito D`)
                break
        }
    }
}

conceito([1.2, 4.5 , 5, 6.7, 7.2, 8.7 , 9, 9.5, 10])