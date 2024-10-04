const texts = [4, [1, 3, 1, 5]];

const n = texts.shift();
let dp = Array(n).fill(0);
const graph = texts.pop();

dp[0] = graph[0];
dp[1] = Math.max(graph[0], graph[1]);

for (let i = 2; i < n; i++) {
  dp[i] = Math.max(dp[i - 2] + graph[i], dp[i - 1]);
}

console.log(dp[n - 1]);
