# 골드 4 : https://www.acmicpc.net/problem/2665

from collections import deque
import copy
from itertools import combinations

n = int(input())
graph = []
for _ in range(n):
  graph.append(list(map(int, input().strip())))

copyGraph = copy.deepcopy(graph)

q = deque()
dx = [0, 1]
dy = [1, 0]


# 현재 graph에서 미로 통과가 가능한 지 여부 반환하는 함수 false => 통과 X
def bfs():
  q.append((0,0))

  while q:
    x, y = q.popleft()

    for i in range(2):
      nx = x + dx[i]
      ny = y + dy[i]

      if nx >= 0 and ny >= 0 and nx < n and ny <n:
        if graph[nx][ny] == 1:
          graph[nx][ny] = graph[x][y] + 1
          q.append((nx, ny))
  return not graph[n-1][n-1] == 1

def checkWhiteRoomIdx() :
  result = []
  for i in range(n):
    for j in range(n):
      if graph[i][j] == 0:
        result.append((i, j))
  return result

result = 0

# 추가적인 흰 방 필요없이 가능한 경우
if bfs():
  print(result)


while(True):
  stop = False
  if bfs() and result == 0:
    break
  # 추가적인 흰 방이 필요한 경우
  graph = copy.deepcopy(copyGraph)
  result += 1
  checkIdx = checkWhiteRoomIdx()
  combi = list(combinations(checkIdx, result))
  for com in combi:
    for c in com:
      x, y = c
      graph[x][y] = 1
        

    # 여기서 다시 실행
    if bfs():
      stop = True
      print(result)
      break
    graph = copy.deepcopy(copyGraph)

  if (stop):
    break
