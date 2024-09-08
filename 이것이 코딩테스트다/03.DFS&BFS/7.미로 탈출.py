from collections import deque

n, m= map(int, input().split())
graph = []
for i in range(n):
  graph.append(list(map(int, input().split())))

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

q = deque()
q.append([0, 0])

while q:
  x, y = q.popleft()
  for i in range(4):
    nx = x + dx[i]
    ny = y + dy[i]

    if nx >= 0 and nx < n and ny >= 0 and ny < m:
      if graph[nx][ny] == 1:
        graph[nx][ny] = graph[x][y] + 1
        q.append([nx, ny])

print(graph[nx-1][ny-1])