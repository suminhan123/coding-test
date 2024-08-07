# https://school.programmers.co.kr/learn/courses/30/lessons/250136
from collections import deque

def solution(land):
  n = len(land)
  m = len(land[0])
  result = [0] * m

  dx = [-1, 0, 1, 0]
  dy = [0, 1, 0, -1]

  def bfs(i, j):
    q = deque()
    q.append((i, j))
    land[i][j] = 0

    minY = j
    maxY = j
    oil = 0

    while q:
      x, y = q.popleft()
      oil+= 1
      minY = min(minY, y)
      maxY = max(maxY, y)

      for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]

        if nx >=0 and ny >= 0 and nx < n and ny < m:
          if land[nx][ny] == 1:
            q.append((nx, ny))
            land[nx][ny] = 0
    for i in range(minY, maxY+1):
      result[i] += oil
    

  for i in range(n):
    for j in range(m):
      if land[i][j] == 1:
        bfs(i, j)


  return max(result)

land = [[1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0], [1, 1, 0, 0, 0, 1, 1, 0], [1, 1, 1, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 1, 1]]
print(solution(land))