var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var nodemon = require('gulp-nodemon');

function compile() {
  return tsProject.src()
    .pipe(ts(tsProject))
    .js.pipe(gulp.dest('build'));
}
gulp.task('compile', compile);

function run() {
  return nodemon({
    script: 'build/main.js'
  })
  .on('exit', function() {
    process.exit();
  });
}
gulp.task('run', run);

gulp.task('default', ['compile'], run);