# https://www.acmicpc.net/problem/2660

n = int(input())
INF = int(1e9)
graph = [[INF] * (n+1) for _ in range(n+1)]
while True:
  a, b = map(int, input().split())
  graph[a][b] = 1
  graph[b][a] = 1
  if a == -1 or b == -1:
    break

for i in range(1, n+1):
  for j in range(1, n+1):
    if i == j:
      graph[i][j] = 0

for k in range(1, n+1):
  for a in range(1, n+1):
    for b in range(1, n+1):
      graph[a][b] = min(graph[a][b], graph[a][k] + graph[k][b])

result = []
score = n
for i in range(1, n+1):
  score = min(score, max(graph[i][1: n+1]))
  result.append([max(graph[i][1: n+1]), i])


print(score, sum(1 for item in result if item[0] == score))
print(" ".join(map(str, [item[1] for item in result if item[0] == score])))