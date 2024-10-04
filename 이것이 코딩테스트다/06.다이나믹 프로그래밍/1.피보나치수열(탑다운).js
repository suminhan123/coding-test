let dp = Array.from({ length: 100 }, () => 0);

const fibo = (n) => {
  console.log(n);
  if (n === 1 || n === 2) {
    return 1;
  }
  if (dp[n] !== 0) {
    return dp[n];
  }
  dp[n] = fibo(n - 1) + fibo(n - 2);
  return dp[n];
};
