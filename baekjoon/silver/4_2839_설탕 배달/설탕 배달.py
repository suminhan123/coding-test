# https://www.acmicpc.net/problem/2839
# 설탕을 정확하게 N 을 배달해야한다
# 봉지가 5킬로그램 과 3킬로그램 이 있고 최대한 적은 봉지를 들고 가려고 한다

n = int(input())
INF = int(1e9)
dp = [INF] * (n+1)
dp[3] = 1
if n > 4:
  dp[5] = 1

  for i in range(6, n+1):
    dp[i] = min(dp[i], dp[i-3] + 1, dp[i-5] + 1)

if dp[n] == INF:
  print(-1)
else:
  print(dp[n])