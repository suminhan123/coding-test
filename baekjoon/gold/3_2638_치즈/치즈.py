# https://www.acmicpc.net/problem/2638
# 주어진 치즈가 모두 녹아 없어지는데 걸리는 정확한 시간
# 두변 이상 공기와 접촉하면 1시간
from collections import deque
n, m = map(int, input().split())
graph = []
for _ in range(n):
  arr = list(map(int, input().split()))
  graph.append(arr)

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]
result = 0

while True:
  visited = [[False]* m for _ in range(n)]
  q = deque()
  q.append((0, 0))
  visited[0][0] = True
  melt = {}
  while q:
    x, y = q.popleft()

    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]

      if nx >= 0 and nx < n and ny >= 0 and ny < m and not visited[nx][ny]:
        if graph[nx][ny] == 0:
          q.append((nx, ny))
          visited[nx][ny] = True
        else:
          if (nx, ny) not in melt:
            melt[(nx, ny)] = 1
          else:
            melt[(nx, ny)] += 1

  if len(melt) == 0:
    break
  else:
    result += 1

    for k, v in melt.items():
      if v >= 2:
        graph[k[0]][k[1]] = 0
print(result)