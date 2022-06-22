function objParaArray (obj) {
    return Object.entries(obj)
}

console.log(objParaArray({nome: 'Notebook' , preco: 2499 , fragil: true}))