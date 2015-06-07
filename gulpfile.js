'use strict';

var gulp = require('gulp');

require('./gulp/tasks/tsd')(gulp);
require('./gulp/tasks/tsc')(gulp);
require('./gulp/tasks/tscPerFile')(gulp);
require('./gulp/tasks/watch')(gulp);
require('./gulp/tasks/minify')(gulp);
require('./gulp/tasks/default')(gulp);
require('./gulp/tasks/build')(gulp);
