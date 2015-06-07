'use strict';

module.exports = function (gulp) {
    gulp.task('tsc', function () {
        var typescript = require('gulp-typescript');
        var sourcemaps = require('gulp-sourcemaps');
        var concat = require('gulp-concat');
        var config = require('../config');

        gulp.src(config.ts.src)
            .pipe(sourcemaps.init())
            .pipe(typescript(config.ts.options))
            .js
            .pipe(concat(config.ts.outputFileName))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(config.ts.dest));
    });
};
