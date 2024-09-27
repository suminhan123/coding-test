# https://www.acmicpc.net/problem/18405
# 바이러스 종류는 1 ~ K번까지 => 번호가 낮은 종류의 바이러스부터 증식
from collections import deque

n, m = map(int, input().split())
graph = []
virus = []

for i in range(n):
  graph.append(list(map(int, input().split())))
  for j in range(n):
    if graph[i][j] != 0:
      virus.append((graph[i][j], (i, j), 0))

s,tx,ty = map(int, input().split())
virus.sort(key = lambda x: x[0])
q = deque(virus)

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

while q:
  v, xy, t = q.popleft()
  x, y = xy
  if t >= s:
    break  

  for i in range(4):
    nx = x + dx[i]
    ny = y + dy[i]

    if nx >= 0 and nx < n and ny >= 0 and ny < m:
      if graph[nx][ny] == 0:
        graph[nx][ny] = v
        q.append((v, (nx, ny), t+1))
print(graph[tx-1][ty-1])