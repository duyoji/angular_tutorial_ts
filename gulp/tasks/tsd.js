'use strict';

module.exports = function (gulp) {
    gulp.task('tsd', function (callback) {
        var tsd = require('gulp-tsd');
        tsd({
            command: 'reinstall',
            config : 'tsd.json'
        }, callback);
    });
};
