// 실버 1 : https://www.acmicpc.net/problem/1080

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let A = [];
let B = [];

input.shift();
let listA = input.slice(0, n);
let listB = input.slice(n, n * 2);

for (let i = 0; i < n; i++) {
  A.push(listA[i].split("").map(Number));
  B.push(listB[i].split("").map(Number));
}

const transitionMatrix = (i, j) => {
  for (let x = i; x < i + 3; x++) {
    for (let y = j; y < j + 3; y++) {
      A[x][y] = A[x][y] === 0 ? 1 : 0;
    }
  }
};

let result = 0;

if (n < 3 || m < 3) {
  if (JSON.stringify(A) !== JSON.stringify(B)) {
    result = -1;
  }
} else {
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < m - 2; j++) {
      if (A[i][j] !== B[i][j]) {
        result += 1;
        transitionMatrix(i, j);
      }
    }
  }
  if (JSON.stringify(A) !== JSON.stringify(B)) {
    result = -1;
  }
}

console.log(result);
