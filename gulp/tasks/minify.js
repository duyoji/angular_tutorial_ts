'use strict';

module.exports = function (gulp) {
    var jsmin = require('gulp-jsmin');
    var rename = require('gulp-rename');
    var config = require('../config');

    gulp.task('minify', ['tsc'], function () {
        gulp.src(config.minify.src)
            .pipe(jsmin())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest(config.minify.dest));
    });
};
