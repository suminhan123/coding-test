# https://school.programmers.co.kr/learn/courses/30/lessons/12980

def solution(n):
  INF = int(1e9)
  dp = [INF] * (n+1)
  dp[1] = 1
  for i in range(2, n+1):
    dp[i] = dp[i-1] + 1
    if i % 2 == 0:
      dp[i] = dp[i // 2]
  return dp[n]