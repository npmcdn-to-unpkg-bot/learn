var gulp = require('gulp');
var ts = require('gulp-typescript');


var tsSrc = ['src/*.ts','src/**/*.ts'];

gulp.task('ts',function () {
    return gulp.src(tsSrc)
        .pipe(ts({
            noImplicitAny: true
        }))
        .pipe(gulp.dest('built/local'));
});

gulp.task('ts:watch',function(){
    gulp.watch(tsSrc,['ts']);
});

gulp.task('default',['ts','ts:watch']);
