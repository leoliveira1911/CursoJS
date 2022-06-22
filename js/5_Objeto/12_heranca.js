console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Leo Oliveira'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3].first())
console.log(['a', 'b', 3].first())

String.prototype.toString = function () {
    return 'Lascou tudo'
} //nao fazer isso. Não mudar funçoes que já existem

console.log("Leo Oliveira".reverse())