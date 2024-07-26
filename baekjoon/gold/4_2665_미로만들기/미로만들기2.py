# 최단 경로를 고려한 dfs
from collections import deque
import sys

input = sys.stdin.readline

n = int(input())

dx = [0, 1, 0, -1]
dy = [1, 0, -1, 0]

graph = []
for _ in range(n):
  graph.append(list(map(int, input().strip())))
visited = [[1e9] * n for _ in range(n)]

def bfs():
  q = deque()
  q.append((0,0))
  visited[0][0] = 0

  while q:
    x, y = q.popleft()

    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]

      if 0<= nx < n and 0<= ny < n:
        # 흰방일 경우
        if graph[nx][ny] == 1 and visited[x][y] < visited[nx][ny]:
          q.append((nx, ny))
          visited[nx][ny] = visited[x][y]
        # 검은 방일 경우
        if graph[nx][ny] == 0 and visited[x][y] < visited[nx][ny]:
          q.append((nx, ny))
          visited[nx][ny] = visited[x][y] + 1


bfs()
print(visited[n-1][n-1])