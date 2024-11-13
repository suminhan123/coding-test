# https://www.acmicpc.net/problem/2206
# 0 은 이동 가능, 1 은 이동 불가능
# 벽하나 부수고 이동하는 경우도 가능
from collections import deque
n, m = map(int, input().split())
graph = []
empty = []

for i in range(n):
  arr = list(map(int, input().strip()))
  graph.append(arr)
  for j in range(m):
    if arr[j] == 1:
      empty.append((i, j))

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]


def bfs (graph):
  q = deque()
  visited = [[0] * m for _ in range(n)]
  q.append((0, 0))
  visited[0][0] = 1

  while q:
    x, y = q.popleft()
    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]
      if nx >= 0 and nx < n and ny >= 0 and ny < m:
        if visited[nx][ny] == 0 and graph[nx][ny] == 0:
          q.append((nx, ny))
          visited[nx][ny] = visited[x][y] + 1
  return visited[n-1][m-1]

INF = int(1e9)
result = INF
value = bfs(graph)
if value != 0:
  result = value

for e in empty:
  x, y = e
  graph[x][y] = 0
  v = bfs(graph)

  if v != 0:
    result = min(result, v)
  graph[x][y] = 1

if result == INF:
  print(-1)
else:
  print(result)