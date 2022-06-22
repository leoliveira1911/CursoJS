function aprovacao(aluno, n1, n2, n3) {
    let p1 = 3
    let p2 = 3
    let p3 = 3
    if (aluno >= 0) {
        if (n1 >= n2 && n1 >= n3) {
            p1 = 4
        } else if (n2 >= n1 && n2 >= n3) {
            p2 = 4
        } else if (n3 >= n1 && n3 >= n2) {
            p3 = 4
        }
        let media = (p1 * n1 + p2 * n2 + p3 * n3) / 10

        if (media >= 5) {
            console.log('Aluno ' + aluno + ' com as notas: ' + n1, n2, n3 + ' Foi aprovado com média ' + media )
        } else  {
            console.log('Reprovado')
        }
    } else {
        console.log('Código de aluno inválido')
    }
}
aprovacao(10, 3, 4, 2)