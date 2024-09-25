# C에서 위급 상황이 발생 -> 많은 도시로 메시지를 보내고자 한다
# 보낼 수 있는 도시의 개수와 걸리는 시간 출력

from heapq import heappop, heappush

INF = int(1e9)
n, m, start = map(int, input().split())
graph = [[] for _ in range(n+1)]
distance = [INF] * (n+1)

for _ in range(m):
  a, b, c = map(int, input().split())
  graph[a].append((b, c))

def dijkstra(start):
  distance[start] = 0
  q = []
  heappush(q, (0, start))

  while q:
    dist, cur = heappop(q)
    if dist > distance[cur]:
      continue
    for i in graph[cur]:
      cost = dist + i[1]
      if cost < distance[i[0]]:
        distance[i[0]] = cost
        heappush(q, (cost, i[0]))

dijkstra(start)

cnt = 0
time = 0

for i in range(1, n+1):
  if i != start and distance[i] < INF:
    cnt += 1
    time = max(time, distance[i])


print(cnt, time)