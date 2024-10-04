const texts = [2, 15, [2, 3]];

const n = texts.shift();
const m = texts.shift();

const money = texts.pop();
const INF = Number(Infinity);
let dp = Array(m + 1).fill(INF);
const minMoney = Math.min(...money);
for (const m of money) {
  dp[m] = 1;
}
for (let i = 1; i < m + 1; i++) {
  for (const m of money) {
    if (i - m >= 0 && dp[i - m] !== INF) {
      dp[i] = Math.min(dp[i], dp[i - m] + 1);
    }
  }
}

if (dp[m] === INF) {
  console.log(-1);
} else {
  console.log(dp[m]);
}
