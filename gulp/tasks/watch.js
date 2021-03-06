'use strict';

module.exports = function (gulp) {
    var watch = require('gulp-watch');
    var config = require('../config');

    gulp.task('watch', function () {
        watch(config.watch.ts, function () {
            gulp.start(['tsc']);
        });

        watch(config.watch.tsTestUnit, function () {
            gulp.start(['tsc:test:unit']);
        });

        watch(config.watch.tsTestE2E, function () {
            gulp.start(['tsc:test:e2e']);
        });
    });
};
