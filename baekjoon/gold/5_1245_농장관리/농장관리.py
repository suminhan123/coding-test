# 골드 5 : https://www.acmicpc.net/problem/1245

from collections import deque

n, m = map(int, input().split())
graph = []
for _ in range(n):
  graph.append(list(map(int, input().split())))

result = 0
visited = [[False for _ in range(m)] for _ in range(n)]

# 해당 문제는 총 8가지 방향
dx = [-1,-1,0,1,1,1,0,-1]
dy = [0,1,1,1,0,-1,-1,-1]

q = deque()

def bfs(row, column):
  q.append((row, column))
  visited[row][column] = True
  flag = True

  while (q):
    x, y = q.popleft()

    for i in range(8):
      nx = x + dx[i]
      ny = y + dy[i]
      if (nx >= 0 and nx < n and ny >= 0 and ny < m):
        if graph[nx][ny] > graph[x][y]:
          flag = False
          continue
        else:
          if not visited[nx][ny]:
            if graph[nx][ny] == graph[x][y]:
              visited[nx][ny] = True
              q.append((nx, ny))

  return flag

for i in range(n):
  for j in range(m):
    if not visited[i][j]:
      if bfs(i, j):
        result+= 1

print(result)

