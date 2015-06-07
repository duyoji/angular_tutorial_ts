'use strict';

module.exports = function (gulp) {
    gulp.task('tsc:test:unit', ['tsc'], function () {
        var typescript = require('gulp-typescript');
        var config = require('../config');

        gulp.src(config.tsTestUnit.src)
            .pipe(typescript(config.tsTestUnit.options))
            .js
            .pipe(gulp.dest(config.tsTestUnit.dest));
    });
};
