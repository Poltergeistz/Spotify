var gulp = require('gulp');

// Logs

gulp.task('message', function(){
    return console.log('gulp is running');
});

// html
gulp.task('html', function(){
  return gulp.src('src/*.html')
    .pipe(gulp.dest('public'))
});

// CSS
gulp.task('css', function(){
  return gulp.src('src/*.css')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(gulp.dest('public'))
});

// JavaScript
gulp.task('js', function(){
  return gulp.src('client/javascript/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'))
});

gulp.task('default', [ 'html', 'css', 'js' ]);