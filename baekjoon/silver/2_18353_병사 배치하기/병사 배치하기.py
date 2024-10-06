n = int(input())
graph = list(map(int, input().split()))

graph.reverse()


dp = [1] * n

for i in range(1, n):
  for j in range(i):
    if graph[j] < graph[i]:
      dp[i] = max(dp[i], dp[j] + 1)

print(n-max(dp))