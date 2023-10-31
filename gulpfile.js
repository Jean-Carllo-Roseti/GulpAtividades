const gulp = require ('gulp');
const sass = require ('gulp-sass')(require('sass'));
const sourcemaps = require ('gulp-sourcemaps');
const uglify = require ('gulp-uglify');
const imageMin = require ('gulp-imagemin');
const dividir = require('./source/scripts/funcoes');
const soPar = require('./source/scripts/funcoes');

function xau (callback){
    console.log('opaaaaa!');
    dividir(10, 2);
    soPar(3, 16);
    callback();
}

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
exports.xau = xau;

