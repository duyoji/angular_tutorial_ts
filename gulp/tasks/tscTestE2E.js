'use strict';

module.exports = function (gulp) {
    gulp.task('tsc:test:e2e', ['tsc'], function () {
        var typescript = require('gulp-typescript');
        var config = require('../config');

        gulp.src(config.tsTestE2E.src)
            .pipe(typescript(config.tsTestE2E.options))
            .js
            .pipe(gulp.dest(config.tsTestE2E.dest));
    });
};
