let preco = 19.90;
let desconto = 0.4;

console.log(19.9 * 0.6)
console.log(preco * 1-desconto ); //valor errado.
console.log(preco * (1-desconto) );

let precoComDesconto = preco * (1-desconto);
console.log (precoComDesconto);

let nome = 'Caderno' //string (texto) - sequencia de símbolos
let categoria = 'Papelaria'
console.log(nome + categoria)
console.log(nome +" "+ categoria)
console.log("Produto: " + nome +", "+ "Categoria: " + categoria +", Preço "+ preco)

