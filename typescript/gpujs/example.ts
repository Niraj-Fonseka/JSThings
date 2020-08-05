import { GPU } from 'gpu.js';
const gpu = new GPU();
const multiplyMatrix = gpu.createKernel(function(a: number[][], b: number[][]) {
  let sum = 0;
  for (let i = 0; i < 512; i++) {
    sum += a[this.thread.y][i] * b[i][this.thread.x];
  }
  return sum;
}).setOutput([512, 512]);

const a = 200;
const b = 300;
const c = multiplyMatrix(a, b) as number[][];

console.log(c);
