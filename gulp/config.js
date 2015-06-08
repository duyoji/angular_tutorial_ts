'use strict';

var dest = 'dest';
var src = 'src';
var test = 'test';
var path = require('path');
var relativeSrcPath = path.relative('.', src);
var relativeTestPath = path.relative('.', test);

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

    tsTestUnit: {
        src: [
            test + '/unit/ts/**/*.ts'
        ],
        dest   : test + '/unit/js',
        options: {
            noImplicitAny: true,
            target       : 'ES6',
            module       : 'commonjs',
            sortOutput   : true
        }
    },

    tsTestE2E: {
        src: [
            test + '/e2e/ts/**/*.ts'
        ],
        dest   : test + '/e2e/js',
        options: {
            noImplicitAny: true,
            target       : 'ES6',
            module       : 'commonjs',
            sortOutput   : true
        }
    },

    watch: {
        ts        : relativeSrcPath + '/ts/**/*.ts',
        tsTestUnit: relativeTestPath + '/unit/ts/**/*.ts',
        tsTestE2E : relativeTestPath + '/e2e/ts/**/*.ts',
        js        : relativeSrcPath + '/js/**/*.js'
    }
};
