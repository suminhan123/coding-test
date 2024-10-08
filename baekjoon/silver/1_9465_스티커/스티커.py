# https://www.acmicpc.net/problem/9465
# 스티커를 떼면 왼, 오, 위, 아래 스티커는 사용 X

t = int(input())
for _ in range(t):
  n = int(input())
  graph = []
  for _ in range(2):
    graph.append(list(map(int, input().split())))

  dp = [[0] * n for _ in range(2)]

  dp[0][0] = graph[0][0]
  dp[1][0] = graph[1][0]

  for i in range(1, n):
    # 위
    dp[0][i] = max(graph[0][i] + dp[1][i-1], dp[0][i-1])
    # 아래
    dp[1][i] = max(graph[1][i] + dp[0][i-1], dp[1][i-1])
  print(max(dp[0][n-1], dp[1][n-1]))