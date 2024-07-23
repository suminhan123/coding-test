// 실버 1 : https://www.acmicpc.net/problem/1679

const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./text.txt";
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = Number(input[0]);
let nums = input[1].split(" ").map(Number);

nums.sort((a, b) => a - b);

const max_cnt = Number(input[2]);
const max_num = nums[nums.length - 1] * max_cnt;
let dp = Array(max_num + 1).fill(0);

for (let i = 1; i < max_num; i++) {
  if (i - nums[0] >= 0) {
    dp[i] = dp[i - nums[0]] + 1;
  }

  for (let j = 1; j < nums.length; j++) {
    if (i - nums[j] >= 0) {
      if (Math.min(dp[i], dp[i - nums[j]] + 1) <= max_cnt) {
        dp[i] = Math.min(dp[i], dp[i - nums[j]] + 1);
      }
    }
  }
}

for (let i = 0; i < dp.length; i++) {
  if (dp[i] > max_cnt) {
    if (i % 2 === 0) {
      console.log("holsoon win at", i);
      return;
    } else {
      console.log("jjaksoon win at", i);
      return;
    }
  }
}
