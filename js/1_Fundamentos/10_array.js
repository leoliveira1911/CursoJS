const valores = [7.7 , 8.9 , 6.3 , 9.2]  //usamos , para separar os elementos. o [] define o array
console.log(valores[0], valores[3])
console.log(valores[4]) //como não existe um elemento de indice 4, ele mostra undefined

valores[4]= 10
console.log(valores[4])

valores[10] = 5
console.log(valores)  //os índices sem valores ficam vazios.

console.log(valores.length) //indica quantos elementos tem no array

valores.push({id: 3}, false, null , 'teste')  //podemos colocar elementos de diferentes tipos no array (não recomendado.)
console.log(valores)

console.log(valores.pop()) //retorna o último valor do array
delete valores[0] //deleta o elemento de indice 0
console.log(valores)

console.log(typeof valores)