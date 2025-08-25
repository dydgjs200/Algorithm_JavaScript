const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const a = input[0]
const b = input[1]
let res = 0

for(let i=0; i<a; i++){
    res += Number(b[i])
}

console.log(res)