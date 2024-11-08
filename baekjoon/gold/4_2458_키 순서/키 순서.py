# https://www.acmicpc.net/problem/2458

n, m = map(int, input().split())
INF = int(1e9)
graph = [[INF] * (n+1) for _ in range(n+1)]

for _ in range(m):
  a, b = map(int, input().split())
  graph[a][b] = 1

for a in range(1, n+1):
  for b in range(1, n+1):
    if a == b:
      graph[a][b] = 0

for k in range(1, n+1):
  for i in range(1, n+1):
    for j in range(1, n+1):
      graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])

result = 0
for node in range(1, n+1):
  left = 0
  right = 0
  left = sum(1 for i in graph[node] if i != INF and i > 0)

  for i in range(1, n+1):
    for j in range(1, n+1):
      if j == node and graph[i][j] != INF and graph[i][j]> 0:
        right += 1
  if left + right == n-1:
    result += 1
print(result)

