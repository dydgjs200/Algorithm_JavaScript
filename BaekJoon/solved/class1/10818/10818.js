const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n')
const count = input[0]
const arr = input[1].split(" ").map(Number)
let maxVal = -Infinity
let minVal = Infinity

for(let i=0; i<arr.length; i++){
    if(arr[i] > maxVal)
        maxVal = arr[i]
    if(arr[i] < minVal)
        minVal = arr[i]
}

console.log(minVal, maxVal)