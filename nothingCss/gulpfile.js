var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('cssmin', function () {
    gulp.src('nothing.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch('nothing.css', ['cssmin']);
});

gulp.task('default', ['cssmin','watch']);
