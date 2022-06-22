function removerPropr(elemento, string) {
       let obj = elemento
    delete obj[string]
    return obj


}

let teste = { nome: 'Joao' , idade: 10}

console.log(removerPropr(teste , 'idade'))