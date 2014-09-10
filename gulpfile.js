var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var traceur = require('gulp-traceur');
var concat = require('gulp-concat');

gulp.task('default', function () {
  return gulp.src('src/*.js')
    .pipe(sourcemaps.init())
    .pipe(traceur({modules:"register"}))
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});