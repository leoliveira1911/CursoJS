const tecnologias = new Map
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})
console.log('console.log(tecnologias.react):')
console.log(tecnologias.react)
console.log('console.log(tecnologias.get("react")):')
console.log(tecnologias.get('react'))
console.log('console.log(tecnologias.get("react").framework):')
console.log(tecnologias.get('react').framework)

console.log('\n')

const chavesVariadas = new Map ( [
    [function (){ } , 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero'],
])
console.log('chaves e valores:')
chavesVariadas.forEach((vl, ch)=> {
    console.log(ch, vl)
})
console.log('chavesvariadas.has(123)')
console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log('chavesvariadas.has(123) depois de realizar o comando chavesVariadas.delete(123')
console.log(chavesVariadas.has(123))

console.log('Setando 123 a valores A e B, olhar código')

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
//chave não aceita repetição, mas aceita valores repetidos.
console.log('Após setar 123 como chave e a como valor e depois b como valor, ele salva o último. mostrando tudo no final:')
console.log(chavesVariadas)

