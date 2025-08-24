const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

const input = fs.readFileSync(filePath).toString().trim().split(' ')
let h = parseInt(input[0])
let m = parseInt(input[1])

if(m < 45){
    h = (h==0) ? 23 : h-1
    m = 60 + (m-45)
}else{
    m -= 45
}

console.log(h, m)