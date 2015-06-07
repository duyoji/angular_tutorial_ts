'use strict';

module.exports = function (gulp) {
    gulp.task('tsc', function () {
        var typescript = require('gulp-typescript');
        var config = require('../config');
        gulp.src(config.ts.src)
            .pipe(typescript(config.ts.options))
            .js
            .pipe(gulp.dest(config.ts.dest));
    });
};
