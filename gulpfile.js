const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

gulp.task('js', function() {
  gulp.src([
      './app.js',
      './controller.js',
      './main.js',
      './service.js',
      './home/homeCtrl.js',
      './map/*.js',
      './photos/*.js',
      './wind/*.js',
      ])
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('css', function() {
  gulp.src([ 
    './styles/*.css',
    './styles/*.scss'
    ])
  .pipe(sass())
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
    gulp.watch([
      './app.js',
      './controller.js',
      './main.js',
      './service.js',
      './home/homeCtrl.js',
      './map/*.js',
      './photos/*.js',
      './wind/*.js',
      ], ['js']);
    gulp.watch('./styles/*.{css,scss}', ['css']);
})

gulp.task('default', ['js', 'css', 'watch']);
