# 실버 2 : https://www.acmicpc.net/problem/18352

from heapq import heappop, heappush
import sys

input = sys.stdin.readline
INF = sys.maxsize

n, m, k, start = map(int, input().split())
distance = [INF] * (n+1)
graph = [[] for _ in range(n+1)]

for _ in range(m):
  x , y = map(int, input().split())
  graph[x].append([y, 1])



distance[start] = 0
q = []
heappush(q, [0, start])

while q:
  dist, now = heappop(q)
  if distance[now] < dist:
    continue

  for node in graph[now]:
    cost = dist + node[1]
    if cost < distance[node[0]]:
      distance[node[0]] = cost
      heappush(q, [cost, node[0]])

result = []

for index, dist in enumerate(distance):
  if dist == k:
    result.append(index)

if len(result) > 0:
  for r in result:
    print(r)
else:
  print(-1)