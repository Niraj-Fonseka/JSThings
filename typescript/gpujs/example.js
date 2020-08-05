"use strict";
exports.__esModule = true;
var gpu_js_1 = require("gpu.js");
var gpu = new gpu_js_1.GPU();
var multiplyMatrix = gpu.createKernel(function (a, b) {
    var sum = 0;
    for (var i = 0; i < 512; i++) {
        sum += a[this.thread.y][i] * b[i][this.thread.x];
    }
    return sum;
}).setOutput([512, 512]);
var a = 200;
var b = 300;
var c = multiplyMatrix(a, b);
console.log(c);
