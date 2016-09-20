/*variables*/
var gulp	 		= require('gulp'),
		concat 		= require('gulp-concat'),
		concatCss = require('gulp-concat-css'),
		cssnano 	= require('gulp-cssnano'),
		rename 		= require("gulp-rename"),
		uglify 		= require('gulp-uglify');

/*concatenate, minify and rename js*/
gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
    .pipe(concat('script.main.js'))
    .pipe(gulp.dest('dist/js/'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js/'));
});
/*concatenate, minify and rename css*/
gulp.task('styles', function () {
  return gulp.src('src/css/*.css')
    .pipe(concatCss("style.main.css"))
    .pipe(gulp.dest('dist/css/'))
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css/'));
});
/*default task gulp*/
gulp.task('default',['scripts','styles']);