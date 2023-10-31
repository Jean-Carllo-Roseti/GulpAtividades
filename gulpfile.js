const gulp = require ('gulp');
const sass = require ('gulp-sass')(require('sass'));
const sourcemaps = require ('gulp-sourcemaps');
const uglify = require ('gulp-uglify');
const imageMin = require ('gulp-imagemin');
const somando = require('./source/scripts/funcoes');


function xx (callback) {
    console.log('testezinho.')
    callback();
}

function ola () {
    console.log('saudação exibidas.')
    xx();
}

console.log('soma: ', somando(2, 8));

function equacoes (a, b) {
    return( a / b);
}

console.log('divisão ', equacoes(6, 3));



function comprimeImagens () {
    return gulp.src('./source/images/*')
        .pipe(imageMin())
        .pipe(gulp.dest('./build/images'))
}

function comprimeJS () {
    return gulp.src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'))
}

function compilar () {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}


exports.sass = compilar;
exports.watch = function () {
    gulp.watch ('./source/style/main.scss', {ignoreInitial: false}, gulp.series(compilar));
}

exports.javaScript = comprimeJS;
exports.retrato = comprimeImagens;
exports.teste = somando;
exports.contas = equacoes;
exports.ola = ola;
exports.xx = xx;
