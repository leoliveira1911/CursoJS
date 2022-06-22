function diaDaSemana(dia) {
    if (dia >=1 && dia <=31) {
        switch (dia%7) {
            case 0: 
            case 1:
                console.log('Fim de semana!!')
                break
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                console.log('Dia útil " :"(')
        }
        
        
        //console.log(dia)
    } else {
        console.log('Dia inválido')
    }
}

diaDaSemana(0)
diaDaSemana(1)
diaDaSemana(2)
diaDaSemana(3)
diaDaSemana(4)
diaDaSemana(5)
diaDaSemana(6)
diaDaSemana(7)
diaDaSemana(8)
diaDaSemana(9)
diaDaSemana(10)
diaDaSemana(11)
diaDaSemana(12)
diaDaSemana(13)
diaDaSemana(14)