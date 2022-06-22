// res 1
function buscarPalavrasSemelhantes(inicio, palavras) {
       return palavras.filter(palavra => palavra.includes(inicio))
}

console.log(buscarPalavrasSemelhantes('abc' , ['abcdefgh', 'acbde',5])) // VAI GERAR ERRO PQ EU TOU TENTANDO RODAR O INCLUDES COM STRING E NÚMERO)

//res 2
function buscarPalavrasSemelhantes(inicio, palavras) {
       const resultado = []
      
       for (let palavra of palavras) 
        if (palavra.includes(inicio))
         resultado.push(palavra)
      
       return resultado
      }
// bruno corrigiu
function buscarPalavrasSemelhantes(inicio, palavras) {
       return palavras.filter(palavra => palavra.includes(inicio))
}

console.log(buscarPalavrasSemelhantes('abc' , ['abcdefgh', 'acbde', 'includes_so_tem_em', 'string_meu_patrao']))

