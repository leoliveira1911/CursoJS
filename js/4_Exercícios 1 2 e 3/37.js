function pa(a1, n, r) {
    let elementos = []
    let ai = 0
    for (let i = 1 ; i <= n ; i++) {
        ai = a1 + (i-1) * r
        elementos.push(ai)
    }
    console.log(elementos)
    let an = elementos.pop()
    let soma = n * (a1 + an) / 2
    console.log(soma)
}

function pg(a1, n, q) {
    let elementos = []
    let ai = 0
    for( let i = 1 ; i <= n ; i++) {
        ai = a1 * (q**(i - 1 ))
        elementos.push(ai)
    }
    console.log(elementos)
    let soma = a1 * (q**n - 1) / (q-1)
    console.log(soma)
}
pa(1, 5, 2)
pg(1, 5, 2)