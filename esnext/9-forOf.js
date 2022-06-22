//enquanto o forIn intera em cima de índice, o forOf intera em cima de valores

//string:
console.log('Percorrendo uma stringo com forOf')
for (let letra of "Cod3r") {
    console.log(letra)
}

//for in no array:
console.log('\nPercorrendo um array com forIn')
const assuntosEcma = ['Map', 'Set', 'Promise']
for (let i in assuntosEcma) {
    console.log(i)
}
//forOf no array
console.log('\nPercorrendo um array com forOf')
for(let assunto of assuntosEcma) {
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])
console.log('\nPercorrendo um Map com forOf')
for( let assunto of assuntosMap) {
    console.log(assunto)
}
console.log('\nPercorrendo um Map.keys() com forOf')
for(let chave of assuntosMap.keys()) {
    console.log(chave)
}
console.log('\nPercorrendo um Map.values() com forOf') 
for(let valor of assuntosMap.values()) {
    console.log(valor)
}
console.log('\nPercorrendo um Map.entries() com forOf e fazendo um destructuring em chave e valor.') 
for ( let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}
console.log('\nPercorrendo um Set com forOf')
const s = new Set(['a', 'b', 'c'])
for(let letra of s) {
    console.log(letra)
}
