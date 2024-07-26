//실버4: https://www.acmicpc.net/problem/1057

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split(" ").map(Number);
let [total, jimin, hanso] = input;
let result = 0;

while (jimin !== hanso) {
  jimin = Math.floor((jimin + 1) / 2);
  hanso = Math.floor((hanso + 1) / 2);
  result = result + 1;
}
console.log(result);
