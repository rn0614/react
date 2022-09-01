//4344 평균은 넘겠지

import fs from 'fs';
let input = fs.readFileSync('.input.txt').toString();
console.log(input);
input = input.split('\n');

const testCaseNum = +input[0];