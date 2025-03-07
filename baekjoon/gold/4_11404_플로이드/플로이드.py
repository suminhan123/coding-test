# https://www.acmicpc.net/problem/11404
# n개 도시가 존재 A -> B로 가는 비용의 최솟값
import sys
input = sys.stdin.readline

n = int(input())
m = int(input())
INF = int(1e9)
graph = [[INF] * (n+1) for _ in range(n+1)]


for a in range(1, n+1):
  for b in range(1, n+1):
    if a == b:
      graph[a][b] = 0

      
for _ in range(m):
  a, b, c = map(int, input().split())
  if graph[a][b] > c:
    graph[a][b] = c


for k in range(1, n+1):
  for a in range(1, n+1):
    for b in range(1, n+1):
      graph[a][b] = min(graph[a][b], graph[a][k] + graph[k][b])

for i in range(1, n+1):
  for j in range(1, n+1):
    if graph[i][j] >= INF:
      print(0, end=" ")
    else:
      print(graph[a][b], end=" ")
  print()