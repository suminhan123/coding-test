//실버4: https://www.acmicpc.net/problem/1337

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

input.shift();

const number = input.map(Number);

number.sort(function (a, b) {
  return a - b;
});

let minValue = 4;
for (let i = 0; i < number.length - 1; i++) {
  let temp = 0;
  for (let j = number[i]; j < number[i] + 5; j++) {
    if (!number.includes(j)) {
      temp += 1;
    }
  }
  if (temp < minValue) {
    minValue = temp;
  }
}

console.log(minValue);
