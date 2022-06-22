///... rest (juntar)    spread(espalhar)

//usar rest com parametro de função
//- exercício 2-revisao.js


//usar spread com objeto
const funcionario = { nome: 'Maria', salario: 1234.56}
const clone = {ativo: true, ...funcionario} //coloca os atributos de funcionario dentro do objeto clone
console.log(clone)

//usar spread com array
const grupoA = ['Joao', 'Pedro', 'Glória']
const grupoFinal = ['Maria', ...grupoA ,'Rafaela'] //espalho todos os elementos do grupoA nessa posição do grupoFinal
console.log(grupoFinal)