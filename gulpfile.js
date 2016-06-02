var gulp = require('gulp'),
  server = require('gulp-server-livereload');


gulp.task('serve', function() {

  gulp.src('.')
    .pipe(server({
      livereload: true,
      open: true,
      filter: function (filename, cb) {
        cb( !(/.git|node_modules/.test(filePath)) );
      }
    }));
});

gulp.task('default', function () {
  gulp.run('serve');
});
