# 연산을 최소 몇 번을 해서 1로 만들 수 있을까
INF = int(1e9)
n = 26
dp = [0] * (n+1)
dp[1] = 0

for i in range(2, n+1):
  dp[i] = dp[i-1] + 1
  if i % 2 == 0:
    dp[i] = min(dp[i], dp[i // 2] + 1)
  if i % 3 == 0:
    dp[i] = min(dp[i], dp[i // 3] + 1)
  if i % 5 == 0:
    dp[i] = min(dp[i], dp[i // 5] + 1)
print(dp[n])
