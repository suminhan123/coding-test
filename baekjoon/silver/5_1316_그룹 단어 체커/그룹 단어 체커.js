// https://www.acmicpc.net/problem/1316
// 그룹 단어란 단어에 존재하는 모든 문자에 대해서 각 문자가 연속해서 나타나는 경우

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./text.txt";
const [n, ...texts] = fs.readFileSync(file).toString().trim().split("\n");

let result = 0;

for (const text of texts) {
  let obj = {};
  let isGroup = true;
  for (let i = 0; i < text.length; i++) {
    const txt = text[i];
    if (!obj[txt] && obj[txt] !== 0) {
      obj[txt] = i;
    } else {
      const idx = obj[txt];
      if (idx + 1 === i) {
        obj[txt] = i;
      } else {
        isGroup = false;
        break;
      }
    }
  }
  if (isGroup) {
    result += 1;
  }
}
console.log(result);
