function carro (str) {
    let teste = 0
    switch (str) {
        case 'hatch' :
            console.log('Compra efetuada com sucesso')
            teste = 1
            break
        case 'sedan' :
        case 'motocicleta' :
        case 'caminhonete' :
            console.log(`${str}? Tem certeza que nao prefere esse modelo?`)
            teste = 1
            break
        }
    if (teste == 0) {
        console.log('Não trabalhamos com esse tipo de automóvel aqui.')
    }
}
carro('hatch')
carro('sedan')
carro('motocicleta')
carro('caminhonete')
carro('Lambreta')
