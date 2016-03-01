var gulp = require("gulp");
var sass = require("gulp-sass");
var minifyCss = require("gulp-minify-css");
var rename = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");

gulp.task('sass',function() {
    var processors = [
        autoprefixer()
    ];

    gulp.src('./sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./style'))
        .pipe(rename({
            suffix: ".min",
            extname: ".css"
        }))
        .pipe(minifyCss())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./style'));
});

gulp.task('sass:watch',function() {
    gulp.watch('./sass/*.scss', ['sass']);
});

gulp.task('default',['sass','sass:watch']);

