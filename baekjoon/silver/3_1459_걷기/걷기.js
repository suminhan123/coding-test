// 실버3 : https://www.acmicpc.net/problem/1459

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split(" ").map(Number);
let [x, y, w, s] = input;
let result = 0;

if (w * 2 <= s) {
  result = (x + y) * w;
} else {
  if (w < s) {
    result = Math.min(x, y) * s + Math.abs(x - y) * w;
  } else {
    if (Math.abs(x - y) % 2 === 0) {
      result = Math.min(x, y) * s + Math.abs(x - y) * s;
    } else {
      result = Math.min(x, y) * s + (Math.abs(x - y) - 1) * s + w;
    }
  }
}
console.log(result);
