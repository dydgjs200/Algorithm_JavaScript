const fs = require("fs");

// 운영체제(플랫폼)에 따라 입력 파일 경로를 다르게 설정
// 백준 서버는 'linux'이므로 '/dev/stdin'을 사용
// 로컬 환경에서는 'input.txt' 파일을 사용
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';

// 파일 내용을 읽어와서 처리
const input = fs.readFileSync(filePath).toString().split(' ');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A - B);