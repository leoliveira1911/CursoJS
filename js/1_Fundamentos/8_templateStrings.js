const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
console.log(concatenacao)

const template = `
    Olá
    ${nome}!`   //o template permite quebra de linha, usamos crase ` ` 

console.log(template)

//expressoes

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()

console.log(`Ei... ${up('Cuidado ')}`)  //podemos chamar funçoes dentro do template string