var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var nodemon = require('gulp-nodemon');
var connect = require('gulp-connect');
var openBrowser = require('gulp-open');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');
var del = require('del');

gulp.task('clean-js', function() {
  return del(['build']);
});
gulp.task('clean-css', function() {
  return del(['styles/css']);
});
gulp.task('clean', ['clean-js', 'clean-css']);

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
gulp.task('compile', ['clean-js'], compile);

// Build less
gulp.task('less', ['clean-css'], function() {
  return gulp.src('styles/less/*.less')
    .pipe(less())
    .pipe(gulp.dest('styles/css'));

});

// Run the development server
gulp.task('serve', ['compile', 'less'], function() {
  return browserSync.init({
    server: {
      baseDir: 'none',
      routes: {
        '/once-upon-nothing': '.'
      }
    },
    port: 4057,
    startPath: '/once-upon-nothing'
  });
});

// Watch
var reload = function(done) {
  browserSync.reload();
  done();
};
gulp.task('reload-js', ['compile'], reload);
gulp.task('reload-css', ['less'], reload);
gulp.task('watch', ['compile', 'less'], function() {
  gulp.watch('./src/**/*.ts', ['compile', 'reload-js']);
  gulp.watch('./**/*.less', ['less', 'reload-css']);
  gulp.watch('./**/*.html').on('change', browserSync.reload);
});

// Main
gulp.task('default', ['clean', 'compile', 'less', 'serve', 'watch']);

// Build
gulp.task('build', ['clean', 'compile', 'less']);
