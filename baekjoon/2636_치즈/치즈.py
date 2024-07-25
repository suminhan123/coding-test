# 골드 4 : https://www.acmicpc.net/problem/2636
from collections import deque

n,m = map(int, input().split())
graph = []
for _ in range(n):
  graph.append(list(map(int, input().split())))

q = deque()
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]


def bfs(row, column):
  q.append((row, column))
  visited[row][column]

  while q:
    x, y = q.popleft()

    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]

      if (nx >= 0 and ny >= 0 and nx < n and ny < m):
        if graph[nx][ny] == 0 and not visited[nx][ny]:
          visited[nx][ny] = True
          q.append((nx, ny))
          
        if graph[nx][ny] == 1 and (nx, ny) not in checkIdx:
          checkIdx.append((nx, ny))


def updateMeltGraph():
  for idx in checkIdx:
    x, y = idx
    graph[x][y] = 0

result = 0
beforeMelt = 0


while True:
  visited = [[False for _ in range(m)] for _ in range(n)]
  checkIdx = []
  bfs(0,0)

  if (len(checkIdx) > 0):
    result += 1
    beforeMelt = len(checkIdx)

  if (len(checkIdx) == 0):
    break

  updateMeltGraph()

print(result)
print(beforeMelt)