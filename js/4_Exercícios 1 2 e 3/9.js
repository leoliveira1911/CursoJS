function aprovacao(nota) {
    if (nota < 38 && nota >= 0) {
        console.log('Aluno reprovado com nota ' + nota)
    } else if (nota <= 100 && nota >= 38) {
        if (nota % 5 >= 3) (
            nota = nota + (5 - ((nota % 5)))
        ) 
        console.log(`Aluno aprovado com nota ${nota}`)
    } else (
        console.log ('Nota inválida')
    )
}

aprovacao(80)
aprovacao(81)
aprovacao(82)
aprovacao(83)
aprovacao(84)
aprovacao(85)
aprovacao(40)
aprovacao(39)
aprovacao(38)
aprovacao(37)
aprovacao(36)
aprovacao(0)
aprovacao(3123)
aprovacao(-12)