const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)


const nomes = ['Whinds', 'Freeway', 'Teste', 'Maria'];

nomes.forEach(function(nome, i) {
    console.log('[forEach]', nome, i);
})