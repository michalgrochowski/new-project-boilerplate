var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin');
var del = require('del');
var cache = require('gulp-cache');
var sequence = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
    // others
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
});

gulp.task('useref', function(){
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpIf('app/js/**/*.js', uglify()))
        .pipe(gulp.dest('dist'))
});

gulp.task('img', function(){
    return gulp.src('app/img/**/*.+(png|jpg|gif|svg)')
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('dist/img'))
});

gulp.task('fonts', function(){
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
});

gulp.task('clean:dist', function(){
    return del.sync('dist');
});

gulp.task('autoprefixer', function() {
    return gulp.src('src/app.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('csso', function () {
    return gulp.src('app/**/*.css')
        .pipe(csso())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', function(){
    sequence(['sass', 'browserSync', 'watch'])
});

gulp.task('build', function(){
    sequence('clean:dist', ['sass', 'useref', 'csso','img', 'fonts', 'autoprefixer'])
});