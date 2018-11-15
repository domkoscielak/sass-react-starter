'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var shell =require('gulp-shell');
var sourcemaps = require('gulp-sourcemaps');


 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./styles'));
});

gulp.task('sass-production', function () {
    return gulp.src('./sass/**/*.scss')
      .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
      .pipe(gulp.dest('./styles'));
});
 
gulp.task('watchsass', function () {
    gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});

gulp.task('watchreact',shell.task([
	'echo Watching ReactJS scripts - DEVELOPMENT MODE!',
	'npm run dev'
]));

gulp.task('react-production',shell.task([
	'npm run production'
]));

gulp.task('production',gulp.parallel('sass-production','react-production'));

gulp.task('default',gulp.parallel('watchsass','watchreact'));