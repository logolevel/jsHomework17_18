/*variables*/
var gulp	 		= require('gulp'),
		concat 		= require('gulp-concat'),
		concatCss = require('gulp-concat-css'),
		cssnano 	= require('gulp-cssnano'),
		rename 		= require("gulp-rename"),
		uglify 		= require('gulp-uglify');

/*concatenate js*/
gulp.task('scripts', function() {
  return gulp.src('src/js/*.js')
    .pipe(concat('script.main.js'))
    .pipe(gulp.dest('dist/js/'));
});
/*concatenate css*/
gulp.task('libs', function () {
  return gulp.src('src/css/*.css')
    .pipe(concatCss("style.main.css"))
    .pipe(gulp.dest('dist/css/'));
});
/*minify and rename main.css*/
gulp.task('cssmin', function() {
    return gulp.src('dist/css/style.main.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css/'));
});
/*minify and rename main.js*/
gulp.task('compress', function () {
  return gulp.src('dist/js/script.main.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js/'));
});
/*default task gulp*/
gulp.task('default',['scripts','libs','cssmin','compress']);