function teste1 (num) {
    if (num>7)
        console.log(num) //se nao colocar as {}, só a primeira
                    //sentenca de código será associada ao if
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if(num>7); { //não usar o ';' em estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)