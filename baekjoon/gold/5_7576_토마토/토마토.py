# https://www.acmicpc.net/problem/7576
# 인접한 곳 왼쪽, 오른쪽, 앞, 뒤
# 며칠이 지나면 토마토가 다 익는 지 
# 1: 익은 토마토 / 0: 익지 않은 토마토

from collections import deque

m, n = map(int, input().split())
graph = []
for _ in range(n):
  graph.append(list(map(int, input().split())))

q = deque()
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

for i in range(n):
  for j in range(m):
    if graph[i][j] == 1:
      q.append((i, j))


while q:
  x, y = q.popleft()
  for i in range(4):
    nx = x + dx[i]
    ny = y + dy[i]

    if nx >= 0 and nx < n and ny >= 0 and ny < m:
      if graph[nx][ny] == 0:
        q.append((nx, ny))
        graph[nx][ny] = graph[x][y] + 1

result = 0
temp = False
for i in range(n):
  for j in range(m):
    result = max(result, graph[i][j])
    if graph[i][j] == 0:
      temp = True
      break
if temp:
  print(-1)
else:
  print(result - 1)