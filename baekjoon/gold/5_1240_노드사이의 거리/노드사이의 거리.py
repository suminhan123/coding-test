# https://www.acmicpc.net/problem/1240
from heapq import heappop, heappush

n, m = map(int, input().split())
INF = int(1e9)
graph = [[] for _ in range(n+1)]

for i in range(n-1):
  a, b, c = map(int, input().split())
  graph[a].append([b, c])
  graph[b].append([a, c])


def dijkstra(start, distance):
  q = []
  heappush(q, (0, start))
  distance[start] = 0

  while q:
    dist, cur = heappop(q)
    if dist > distance[cur]:
      continue
    for i in graph[cur]:
      cost = dist + i[1]
      if distance[i[0]] > cost:
        heappush(q, (cost, i[0]))
        distance[i[0]] = cost


for _ in range(m):
  x, y = map(int, input().split())
  distance = [INF] * (n+1)
  dijkstra(x, distance)
  print(distance[y])