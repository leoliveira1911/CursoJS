const gulp = require('gulp')
const {
    parallel
} = require('gulp')
const series = gulp.series

const antes1 = cb => {
    console.log('Tarefa Antes 1')
    return cb()
}
const antes2 = cb => {
    console.log('Tarefa Antes 2')
    return cb()
}
const fim = cb => {
    console.log('Tarefa Fim')
    return cb()
}


function copiar(cb) {
    console.log('Tarefa de copiar!')
    gulp.src('pastaA/**/*.txt') //-seleciona todos os arquivos na pastaA com o formato .txt
        //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt']) --seleciona apenas os arquivos selecionados
        //.pipe(funcaoDeTransformacao()) -aplica transformações em série nos arquivos.
        .pipe(gulp.dest('pastaB'))
    return cb()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim
)