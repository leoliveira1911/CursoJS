const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let x in nums) {
    if (x==5)
    break //sai do laço
    console.log(`índice ${x} = ${nums[x]}`)
}
for (let y in nums) {
    if (y ==5) {
        continue //pula a repetição e vai para a próxima
    }
    console.log(`índice ${y} = ${nums[y]}`)
}
//NÃO FAZER ISSO:
externo : for (let a in nums) {
    for (b in nums) {
        if (a == e && b == 3) break externo
        console.log(`Par = ${a} , ${b}`)
    }
}