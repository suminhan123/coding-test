# https://www.acmicpc.net/problem/14916
# 동전 2원, 5원 최소 동전의 개수
n = int(input())
INF = int(1e9)
dp = [INF] * (n+1)

def solution(n):
  if n == 1 or n == 3:
    return -1
  elif n == 2 or n == 5:
    return 1
  elif n == 4:
    return 2
  else:
    dp[2] = 1
    dp[4] = 2
    dp[5] = 1
    for i in range(6, n+1):
      dp[i] = min(dp[i-2] + 1, dp[i-5] + 1, dp[i])

    if dp[n] >= INF:
      return -1
    else:
      return dp[n]

print(solution(n))
