from heapq import heappop, heappush
import sys
input = sys.stdin.readline
INF = int(1e9)

n, m = map(int, input().split())
start = int(input())
graph = [[] for _ in range(n+1)]
distance = [INF] * (n+1)

for _ in range(m):
  a,b,c = map(int, input().split())
  graph[a].append((b,c))

def dijkstra (start):
  distance[start] = 0
  q = []
  heappush(q, (0, start))

  while q:
    dist, cur = heappop(q)
    if dist > distance[cur]:
      continue
    for i in graph[cur]:
      cost = dist + i[1]
      if distance[i[0]] > cost:
        distance[i[0]] = cost
        heappush(q, (cost, i[0]))
