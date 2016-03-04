var gulp = require('gulp');
//var prefixer = require('gulp-prefixer');
//
//gulp.task('prefixer',function(){
//    gulp.src('./src/*.js',{buffer:false})
//        .pipe(prefixer('// Hello world too!'))
//        .pipe(gulp.dest('./dest'));
//});

var listing = require('gulp-listing');

gulp.task('default',function(){
    gulp.src('./src/*.html')
        .pipe(listing('listing.html'))
        .pipe(gulp.dest('./src'));
});




