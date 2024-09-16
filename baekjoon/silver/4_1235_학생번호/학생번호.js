// https://www.acmicpc.net/problem/1235
// 학생마다 고유 번호를 부여 => 0~9 문자열, 길이는 같다

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./text.txt";
const [n, ...text] = fs.readFileSync(file).toString().trim().split("\n");

let result = text[0].length;

for (let i = 1; i <= text[0].length; i++) {
  let arr = new Set();
  let temp = false;

  for (const t of text) {
    if (arr.has(t.slice(-i))) {
      temp = true;
      break;
    }
    arr.add(t.slice(-i));
  }
  if (!temp) {
    console.log(i);
    return;
  }
}
