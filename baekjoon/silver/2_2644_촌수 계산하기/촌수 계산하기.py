# https://www.acmicpc.net/problem/2644
from heapq import heappop, heappush
n = int(input())

x, y = map(int, input().split())
INF = int(1e9)
distance = [INF] * (n+1)
graph = [[] for _ in range(n+1)]
m = int(input())
for _ in range(m):
  a, b = map(int, input().split())
  graph[a].append([b, 1])
  graph[b].append([a, 1])

def dijkstra (start):
  q = []
  distance[start] = 0
  heappush(q, (0, start))

  while q:
    dist, cur = heappop(q)
    if dist > distance[cur]:
      continue
    for i in graph[cur]:
      cost = dist + i[1]
      if cost < distance[i[0]]:
        heappush(q, (cost, i[0]))
        distance[i[0]] = cost

dijkstra(x)

if distance[y] == INF:
  print(-1)
else:
  print(distance[y])