var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvar = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins');

gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/styles.css')
                .pipe(postcss([cssImport, mixins, cssvar, nested, autoprefixer]))
                .on('error', function(errMsg) {
                    console.log(errMsg.toString());
                    this.emit('end');
                })
                .pipe(gulp.dest('./app/temp/styles'));
});
