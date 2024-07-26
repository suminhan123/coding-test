//실버5: https://www.acmicpc.net/problem/1010

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

input.shift(0);

const combination = (n, k) => {
  let parent = 1;
  let child = 1;

  for (let i = 0; i < k; i++) {
    parent *= n - i;
    child *= k - i;
  }
  console.log(Math.round(parent / child));
};

for (let i = 0; i < input.length; i++) {
  const arr = input[i].split(" ");
  k = parseInt(arr[0]);
  n = parseInt(arr[1]);

  combination(n, k);
}
