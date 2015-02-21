var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var jshint = require('gulp-jshint');
var react = require('gulp-react');

gulp.task('default',['jshint','build'],function() {
  gulp.watch(['src/**/**.jsx'],['jshint','build'])
});

gulp.task('build',function() {
  return browserify({
    entries: ['./src/ace.jsx'],
    debug: true
  })
  .bundle()
  .pipe(source('ace.js'))
  .pipe(gulp.dest('build'));
});


gulp.task('example',function() {
  return browserify({
    entries: ['./example/example.jsx'],
    debug: true
  })
  .bundle()
  .pipe(source('example.js'))
  .pipe(gulp.dest('build'));
});


gulp.task('jshint',function() {
  gulp.src('src/**/**.jsx').pipe(react()).pipe(jshint())
  .pipe(jshint.reporter('default'))
});
