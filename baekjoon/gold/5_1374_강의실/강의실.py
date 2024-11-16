# https://www.acmicpc.net/problem/1374
# n = 8
# graph = [(15, 21), (20, 25), (3, 8), (2, 14), (6, 27), (7, 13), (12, 18), (6, 20)]

n = int(input())
graph = []
for _ in range(n):
  n, x, y = map(int, input().split())
  graph.append((x, y))
graph.sort()
max_time = max(i[1] for i in graph) 
INF = int(1e9)

dp = [0] * (max_time + 1)

for value in graph:
  x, y = value
  for i in range(x, y+1):
    dp[i] += 1
print(max(dp))