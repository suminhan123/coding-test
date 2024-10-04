let dp = Array(100).fill(0);
dp[1] = 1;
dp[2] = 2;

const fibo = (n) => {
  for (let i = 3; i < n + 1; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  return dp[n];
};
