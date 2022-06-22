const soma = (a,b) => a+b
const media = vet => vet.reduce(soma) / vet.length

console.log(media([10, 9]))
console.log(media([10, 0]))
console.log(media([1, 2, 3, 4, 5]))