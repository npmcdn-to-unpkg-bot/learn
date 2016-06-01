var gulp = require('gulp');
var rev = require('gulp-rev');
var clean = require('gulp-clean');
var revCollector = require('gulp-rev-collector');

gulp.task('clean', function () {

    return gulp.src('./dist', {read: false})
        .pipe(clean());
});

gulp.task('rev', function () {

    return gulp.src(['src/js/*.js', 'src/css/*.css'], {base: 'src'})
        .pipe(rev())
        .pipe(gulp.dest('dist'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('dist'))
});

gulp.task('revCollector', function () {

    return gulp.src(['dist/*.json', 'src/index.html'])
        .pipe(revCollector({replaceReved: true}))
        .pipe(gulp.dest('dist'))
});