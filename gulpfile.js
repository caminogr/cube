const gulp        = require('gulp');
const pug         = require('gulp-pug')
const scss        = require('gulp-Scss');
const webserver   = require('gulp-webserver');
const runSequence = require('gulp-run-sequence');

gulp.task('pug', function () {
    return gulp.src('./src/index.pug')
          .pipe(pug())
          .pipe(gulp.dest('./src/'))
});

gulp.task('scss', function () {
    return gulp.src('./src/scss/style.scss')
        .pipe(scss())
        .pipe(gulp.dest('./src/css/'))
});

gulp.task('webserver', function() {
    return gulp.src('./src')
        .pipe(webserver({
            host: 'localhost',
            port: 8000,
            open: true,
        }));
});

gulp.task('watch', function(){
    return gulp.watch('./src/scss/*.scss', ['scss']);
})

// gulp.task('default', ['watch','webserver']);
gulp.task('default', function(callback) {
    runSequence('pug', 'watch', 'webserver', callback)
})
