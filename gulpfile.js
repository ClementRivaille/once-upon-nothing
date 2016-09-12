var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var nodemon = require('gulp-nodemon');
var connect = require('gulp-connect');
var openBrowser = require('gulp-open');

function compile() {
  return tsProject.src()
    .pipe(ts(tsProject))
    .js.pipe(gulp.dest('build'));
}
gulp.task('compile', compile);

// Run the development server
gulp.task('connect', ['compile'], function() {
  return connect.server({
    root: ['.'],
    port: 4057,
    livereload: {
      port: 35740
    }
  });
});

gulp.task('open', ['connect'], function() {
  return gulp.src('index.html').pipe(openBrowser('', {
    url: 'http://localhost:4057/index.html#/'
  }));
});

/*-----------------------------------
WATCH
----------------------- */

// Watch all file modifications then trigger tasks dedicated to file types
// gulp.task('reload', function() {
//   return gulp.src(['app/modules/**/*.js', 'app/src/**/*.js']).pipe(connect.reload());
// });
gulp.task('watch', ['compile'], function() {
  gulp.watch('./src/**/*.ts', ['compile']);
//   gulp.watch('app/**/*.js', gulp.parallel(['js', 'reload']));
//   gulp.watch('app/**/*.less', gulp.parallel(['less', 'reload']));
//   gulp.watch('app/index.html', gulp.parallel(['inject', 'reload']));
});


gulp.task('default', ['compile', 'connect', 'open', 'watch']);
