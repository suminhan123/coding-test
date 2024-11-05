# https://www.acmicpc.net/problem/7562
from collections import deque

dx = [-2, -1, 1, 2, 2, 1, -1, -2]
dy = [1, 2, 2, 1, -1, -2, -2, -1]

t = int(input())

def solution(n, sx, sy, ex, ey):
  q = deque()
  q.append([sx, sy])

  graph = [[-1] * n for _ in range(n)]
  graph[sx][sy] = 0
  while q:
    x, y = q.popleft()
    for i in range(8):
      nx = x + dx[i]
      ny = y + dy[i]

      if nx >= 0 and nx < n and ny >= 0 and ny < n:
        if graph[nx][ny] == -1:
          graph[nx][ny] = graph[x][y] + 1
          q.append([nx, ny])

  return graph[ex][ey]

for _ in range(t):
  n = int(input())
  sx, sy = map(int, input().split())
  ex, ey = map(int, input().split())
  print(solution(n, sx, sy, ex, ey))