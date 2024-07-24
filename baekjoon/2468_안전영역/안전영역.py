# 실버 1 : https://www.acmicpc.net/problem/2468
from collections import deque

n = int(input())
graph = []
rainCnt = 0
maxRainCnt = 0
for _ in range(n):
  newlist = list(map(int, input().split()))
  rainCnt = min(rainCnt, min(newlist))
  maxRainCnt = max(maxRainCnt, max(newlist))
  graph.append(newlist)

result = 0

visited = [[False for _ in range(n)] for _ in range(n)]
dx = [-1,0,1,0]
dy = [0,1,0,-1]

q = deque()


def bfs(row, column, rain):
  q.append((row, column))
  visited[row][column] = True

  while q:
    x, y = q.popleft()
    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]

      if (nx < n and ny < n and nx >= 0 and ny >= 0):
        if (graph[nx][ny] > rain and not visited[nx][ny]):
          visited[nx][ny] = True
          q.append((nx, ny))

def notRainRound(rain):
  cnt = 0
  for i in range(n):
    for j in range(n):
      if (not visited[i][j] and graph[i][j] > rain):
        bfs(i, j, rain)
        cnt += 1
  return cnt

for i in range(maxRainCnt - rainCnt + 1):
  visited = [[False for _ in range(n)] for _ in range(n)]
  newResult = notRainRound(rainCnt + i)

  if result < newResult:
    result = newResult

print(result)
