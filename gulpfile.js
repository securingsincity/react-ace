var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var jshint = require('gulp-jshint');
var react = require('gulp-react');

gulp.task('default',['jshint','build'],function() {
  gulp.watch(['src/**/**.js'],['jshint','build'])
});

gulp.task('build',function() {
  return browserify({
    entries: ['./src/ace.js'],
    debug: true
  })
  .bundle()
  .pipe(source('ace.js'))
  .pipe(gulp.dest('build'));
});


gulp.task('example',function() {
  return browserify({
    entries: ['./example/example.js'],
    debug: true
  })
  .bundle()
  .pipe(source('example.js'))
  .pipe(gulp.dest('build'));
});


gulp.task('jshint',function() {
  gulp.src('src/**/**.js').pipe(react()).pipe(jshint())
  .pipe(jshint.reporter('default'))
});