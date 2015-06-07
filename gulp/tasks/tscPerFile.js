'use strict';

module.exports = function (gulp) {
    gulp.task('tsc:file', function () {
        var typescript = require('gulp-typescript');
        var config = require('../config');

        gulp.src(config.ts.src)
            .pipe(typescript(config.tsPerFile.options))
            .js
            .pipe(gulp.dest(config.tsPerFile.dest));
    });
};
