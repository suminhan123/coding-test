# https://www.acmicpc.net/problem/14501
n = int(input())
graph = []
for _ in range(n):
  t, c = map(int, input().split())
  graph.append([t, c])
max_value = 0

dp = [0] * (n+1)

for i in range(n-1, -1, -1):
  time, cost = graph[i]
  if i+time <= n:
    dp[i] = max(dp[i+1], dp[i+time] +cost)
  else:
    dp[i] = dp[i+1]
print(dp[0])