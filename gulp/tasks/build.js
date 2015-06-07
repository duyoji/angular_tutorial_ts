'use strict';

module.exports = function (gulp) {
    gulp.task('build', function () {
        gulp.start(['tsc', 'minify']);
    });
};
