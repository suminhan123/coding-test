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

    tempy = j
    oil = 1

    while q:
      x, y = q.popleft()

      for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]

        if nx >=0 and ny >= 0 and nx < n and ny < m:
          if land[nx][ny] == 1:
            q.append((nx, ny))
            oil += 1
            if ny >= tempy:
              tempy = ny
            land[nx][ny] = 0
    return [tempy, oil]

  for i in range(n):
    for j in range(m):
      if land[i][j] == 1:
        rightY, oil = bfs(i, j)
        for oilX in range(j, rightY + 1):
          result[oilX] += oil

  return max(result)

land = [[1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 0, 0], [1, 1, 0, 0, 0, 1, 1, 0], [1, 1, 1, 0, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0, 1, 1]]
print(solution(land))