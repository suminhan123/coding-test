# https://www.acmicpc.net/problem/9095
# 1,2,3의 합으로 나타내는 방법의 수

t = int(input())
for _ in range(t):
  n = int(input())
  dp = [0] * (n+1)

  # n-1 에서 1 더하기
  # n-2 에서 2 더하기
  # n-3 에서 3 더하기
  for i in range(1, n+1):
    if i == 1:
      dp[i] = 1
    elif i == 2:
      dp[i] = 2
    elif i == 3:
      dp[i] = 4
    else:
      dp[i] = dp[i-1] + dp[i-2] + dp[i-3]

  print(dp[n])