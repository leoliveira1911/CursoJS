const gulp = require('gulp')
const {
    series,
    parallel
} = require('gulp')

const {
    appHTML,
    appCSS,
    appJS,
    appIMG
} = require('./gulpTasks/app.js')
const {
    depsCSS,
    depsFonts
} = require('./gulpTasks/deps.js')
const {
    monitorarArquivos,
    servidor
} = require('./gulpTasks/servidor.js')

gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('appJS', appJS)
gulp.task('appIMG', appIMG)

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)