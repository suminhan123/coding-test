
n , m = map(int, input().split())
graph = []
for i in range(n):
  graph.append(list(map(int, input().split())))
result = 0
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]


def dfs(x, y):
  graph[x][y] = 1

  for i in range(4):
    nx = x + dx[i]
    ny = y + dy[i]

    if (nx >= 0 and ny >= 0 and nx < n and ny <m):
      if graph[nx][ny] == 0:
        dfs(nx, ny)

for i in range(n):
  for j in range(m):
    if graph[i][j] == 0:
      dfs(i, j)
      result += 1

print(result)