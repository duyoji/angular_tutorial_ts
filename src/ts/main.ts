/// <reference path="../../typings/tsd.d.ts"/>

import angular = require('angular');

// (() => {
//     alert(1);
// })();

function greeter(person:string = 'default name') {
    return `Hello, ${person}`;
}

document.body.innerHTML = greeter();
