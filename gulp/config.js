'use strict';

var dest = 'dest';
var src = 'src';
var path = require('path');
var relativeSrcPath = path.relative('.', src);

module.exports = {
    minify: {
        src : [dest + '/js/*.js', dest + '/js/**/*.js'],
        dest: dest + '/js/min'
    },

    tsd: {
       json: src + '/tsd.json'
    },

    ts: {
        src: [
            src + '/ts/**/*.ts'
        ],
        dest   : dest + '/js',
        options: {
            noImplicitAny: true,
            target       : 'ES6',
            module       : 'commonjs',
            sortOutput   : true
        },
        outputFileName: 'bundle.js'
    },

    tsPerFile: {
        src: [
            src + '/ts/**/*.ts'
        ],
        dest   : src + '/js',
        options: {
            noImplicitAny: true,
            target       : 'ES6',
            module       : 'commonjs',
            sortOutput   : true
        }
    },

    watch: {
        ts: relativeSrcPath + '/ts/**/*.ts',
        js: relativeSrcPath + '/js/**/*.js'
    }
};
