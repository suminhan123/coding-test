// 실버3: https://www.acmicpc.net/problem/1463

const fs = require("fs");
const file = process.platform === "linux" ? "dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim();

const n = Number(input);
let dp = Array(10000001).fill(0);

for (let i = 2; i < n + 1; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i % 2 == 0) {
    dp[i] =
      dp[i] < dp[Math.floor(i / 2)] + 1 ? dp[i] : dp[Math.floor(i / 2)] + 1;
  }
  if (i % 3 == 0) {
    dp[i] =
      dp[i] < dp[Math.floor(i / 3)] + 1 ? dp[i] : dp[Math.floor(i / 3)] + 1;
  }
}
console.log(dp[n]);
