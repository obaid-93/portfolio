// npx browser-sync start --server --files "dist/*.html, dist/css/*.css"
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var $ = require('gulp-load-plugins')();
var autoprefixer = require('autoprefixer');
const webpack = require('webpack-stream');
const purgecss = require('gulp-purgecss')
const clean = require('gulp-clean');
var sassPaths = [
    //   'node_modules/foundation-sites/scss',
    //   'node_modules/motion-ui/src'
];

const cleanDist = () => {
    return gulp.src('dist/*/').pipe(clean());
};

const copyStyles = () => {
    return gulp.src('assets/css/*.css')
        .pipe(gulp.dest('dist/assets/css/'));
};

const copyFonts = () => {
    return gulp.src('assets/fonts/**/*')
        .pipe(gulp.dest('dist/assets/fonts/'));
};

const copyImages = () => {
    return gulp.src('assets/images/**/*')
        .pipe(gulp.dest('dist/assets/images/'));
};

const copyScripts = () => {
    return gulp.src('assets/js/**/*')
        .pipe(gulp.dest('dist/assets/js/'));
};

const copyHtml = () => {
    return gulp.src('*.html', '*.php')
        .pipe(gulp.dest('dist/'));
};


function sass() {
    return gulp.src('assets/sass/styles.scss')
        .pipe($.sass({
                includePaths: sassPaths,
                outputStyle: 'compressed' // if css compressed **file size**
            })
            .on('error', $.sass.logError))
        .pipe($.postcss([
            autoprefixer({
                overrideBrowserslist: ['last 2 versions', 'ie >= 9']
            })
        ]))
        // .pipe(purgecss({
        //     content: ['*.html', 'assets/js/*.js', 'assets/scripts/*.js', 'assets/scripts/**/*.js'],
        //     safelist: {
        //         deep: [/^swiper-pagination/],
        //     }
        // }))
        .pipe(gulp.dest('assets/css/'))
        .pipe(browserSync.stream());
};

function scripts() {
    return gulp
        .src('assets/scripts/scripts.js')
        .pipe(
            webpack({
                watch: true,
                mode: 'development',
            })
        )
        .pipe(gulp.dest('assets/js/'));
};

function scriptsProd() {
    return gulp
        .src('assets/scripts/scripts.js')
        .pipe(
            webpack({
                watch: true,
                mode: 'production',
                optimization: {
                    runtimeChunk: 'single',
                },
            })
        )
        .pipe(gulp.dest('assets/js/'));
};

function serve() {
    browserSync.init({
        server: "./",
        online: true,
        tunnel: true,
    });

    gulp.watch("assets/sass/**/*.{scss,sass}", sass);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("assets/js/main.js").on('change', browserSync.reload);
}



gulp.task('purgecss', () => {
    return gulp.src('assets/**/*.css')
        .pipe(purgecss({
            content: ['*.html', 'assets/js/*.js']
        }))
        .pipe(gulp.dest('assets/'))
})

gulp.task('sass', sass);
gulp.task('scripts', scripts);
gulp.task('scriptsProd', scriptsProd);
gulp.task('dist', gulp.series(cleanDist, copyStyles, copyFonts, copyImages, copyScripts, copyHtml));
gulp.task('serve', gulp.series('sass', serve));
gulp.task('serve', gulp.series('scripts', serve));
gulp.task('default', gulp.series('sass', serve));