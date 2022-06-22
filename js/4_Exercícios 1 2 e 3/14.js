function fruta (str) {
    let teste = 0
    switch (str) {
        case 'maçã' :
            console.log('Não vendemos maçã')
            teste = 1
            break
        case 'kiwi' :
            console.log('Estamos com escasses de kiwis')
            teste = 1
            break
        case 'melancia' :
            console.log('Aqui está, são 3 reais o kg')
            teste = 1
            break
    }
    if (teste == 0) {
        console.log('ERRO! Escolha entre as frutas disponíveis.')
    }
}
fruta('maçã')
fruta('kiwi')
fruta('melancia')
fruta('mela')
