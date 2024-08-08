# 골드 2 https://www.acmicpc.net/problem/1525

from collections import deque


puzzle = ''
for i in range(3):
  puzzle += "".join(list(input().split()))

visited = {puzzle: 0}

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]


def bfs():
  q = deque()
  q.append(puzzle)

  while q:
    newPuzzle = q.popleft()
    count = visited[newPuzzle]

    if newPuzzle == "123456780":
      return count
    
    idx = newPuzzle.index("0")
    xIdx = idx // 3
    yIdx = idx % 3

    for i in range(4):
      nx = xIdx + dx[i]
      ny = yIdx + dy[i]

      if nx >= 0 and nx < 3 and ny >= 0 and ny < 3:
        puzzleList = list(newPuzzle)
        puzzleList[nx*3 + ny], puzzleList[xIdx*3 + yIdx] = puzzleList[xIdx*3 + yIdx], puzzleList[nx*3 + ny]
        newString = ''.join(puzzleList)
        
        if not visited.get(newString):
          visited[newString] = count + 1
          q.append(newString)
  return -1




print(bfs())