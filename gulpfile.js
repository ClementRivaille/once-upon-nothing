var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var nodemon = require('gulp-nodemon');
var connect = require('gulp-connect');
var openBrowser = require('gulp-open');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

// Build js
function compile() {
  return tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))
    .js.pipe(sourcemaps.write('.', {
      sourceRoot: function(file) {
        return file.cwd + '/src';
      },
      sourceMappingURLPrefix: function (file) {
        var mapPath = file.path.split(/[\\\/]/);
        return 'http://localhost:4057/build/' + mapPath.slice(1, mapPath.length - 1).join('/');
      }
    }))
    .pipe(gulp.dest('build'));
}
gulp.task('compile', compile);

// Run the development server
gulp.task('serve', ['compile'], function() {
  return browserSync.init({
    server: {
      baseDir: './'
    },
    port: 4057,
    startPath: '/index.html'
  });
});

// Watch
gulp.task('reload-js', ['compile'], function() {
  browserSync.reload();
  done();
});
gulp.task('watch', ['compile'], function() {
  gulp.watch('./src/**/*.ts', ['compile', 'reload-js']);
  gulp.watch('./**/*.html').on('change', browserSync.reload);
});

// Main
gulp.task('default', ['compile', 'serve', 'watch']);
