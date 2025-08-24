const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

// 입력값을 모두 읽어와서 \r 문자를 먼저 제거합니다.
const input = fs.readFileSync(filePath).toString().replace(/\r/g, '').split('\n');

const a = input[0];
const b = input[1];
const c = input[2];

const result1 = parseInt(a) + parseInt(b) - parseInt(c);
const result2 = parseInt(a + b) - parseInt(c);
console.log(result1);
console.log(result2);