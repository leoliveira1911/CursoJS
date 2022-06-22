//Map vai mapear um array e gerar outro array do mesmo tamanho 

const nums = [1, 2, 3, 4, 5]

//For com propósito.
let resultado = nums.map(function(e){
    return e * 2
})
console.log( resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.' , ',')}`
console.log('O original: ')
console.log(nums)
resultado = nums.map(soma10)
console.log('Soma10: ')
console.log(resultado)
resultado = nums.map(soma10).map(triplo)
console.log('Soma10 e triplo: ')
console.log( resultado)
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log('Soma10 e triplo e dinheiro: ')
console.log( resultado)