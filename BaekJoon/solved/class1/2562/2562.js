const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number)

const maxVal = Math.max(...input)
const index = input.indexOf(maxVal)

console.log(maxVal)
console.log(index+1)