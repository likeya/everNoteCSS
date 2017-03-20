var gulp = require('gulp');  
var uncss = require('gulp-uncss');
gulp.task('default', function () {  
    return gulp.src('./homepage.css')
        .pipe(uncss({
            html: ['demo.html']
        }))
        .pipe(gulp.dest('./out'));
});
