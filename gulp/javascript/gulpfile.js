const {
    series,
    parallel
} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb) {
    gulp.src('src/**/*.js') //seleciona os arquivos .js na pasta src e em suas subpastas
        .pipe(babel({
            comments: false, //deixa os comentários de fora
            presets: ["env"] //pega a versão mais nova do JS
        }))
        .pipe(uglify()) //mimifica o código
        .on('error', err => console.log(err)) // .on() atua se acontecer determinada condição, no casso do exemplo, um erro.
        .pipe(concat('codigo.min.js')) //junta os códigos já mimificados - o parametro é o nome do arquivo que vai ser gerado
        .pipe(gulp.dest('build')) //o destino que o arquivo será salvo

    return cb()
}

//outra forma de escrever a função:
//ao invés de chamar a callback no final, podemos passar a sequencia de código no return.
//function transformacaoJS(cb) {
//    return gulp.src('src/**/*.js') //seleciona os arquivos .js na pasta src e em suas subpastas
//        .pipe(babel({
//            comments: false, //deixa os comentários de fora
//            presets: ["env"] //pega a versão mais nova do JS
//       }))
//        .pipe(uglify()) //mimifica o código
//        .on('error', err => console.log(err)) // .on() atua se acontecer determinada condição, no casso do exemplo, um erro.
//        .pipe(concat('codigo.min.js')) //junta os códigos já mimificados - o parametro é o nome do arquivo que vai ser gerado
//        .pipe(gulp.dest('build')) //o destino que o arquivo será salvo
//}

function fim(cb) {
    console.log('Fim!!')
    return cb()
}

module.exports.default = series(transformacaoJS , fim)