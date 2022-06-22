const escola = 'Cod3r'

console.log(escola.charAt(2))  //retorna a letra na posição 2, contando a partir do 0
console.log(escola.charAt(4))  //retorna a letra na posição 4, contando a partir do 0
console.log(escola.charAt(5))  //como não temos 6 valores, ele retorna um valor vazio

console.log(escola.charCodeAt(3)) //retorna o código na tabela unicode associado ao caracter na posição 3 
//www.unicode-table.com e ver que o código relacionado ao numero 3 é 51

console.log(escola.indexOf('r')) //retorna a posição (índice) do caracter - 5 ª letra, índice 4 (lembrar que começa a contar do zero)
console.log(escola.substring(1)) //retorna o string a partir do caracter de índice 1 (o)
console.log(escola.substring(0,3)) //retorna o string a partir do caracter de índice zero até o caracter de índice 3 - SEM INCLUIR O INDICE 3
                                   //Pode pensar tb - retorna 3 caracteres a partir do índice 0
console.log('Escola '.concat(escola).concat('!!!'))    //junta os strings
console.log('Escola '+ escola +'!!!')    //junta os strings
console.log(escola.replace('C', 'e'))   //substitui um caracter
console.log(escola.replace(3, 'e'))   //substitui um caracter
console.log(escola.replace('r', 'e'))   //substitui um caracter

console.log('Ana,Maria,Pedro'.split(',')) //transforma em array, o split ( ) indica qual caracter eu uso como separador 

