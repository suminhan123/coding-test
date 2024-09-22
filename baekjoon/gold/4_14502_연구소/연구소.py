# https://www.acmicpc.net/problem/14502
from collections import deque

def get_combi (arr, n):
  result = []
  def combi (element, idx):
    if len(element) == n:
      result.append(element[:])
      return
    for i in range(idx, len(arr)):
      element.append(arr[i])
      combi(element, i+1)
      element.pop()
  combi([], 0)
  return result

n,m = map(int, input().split())
graph = []
empty = []
result = 0
q = deque()
virus = []
for i in range(n):
  graph.append(list(map(int, input().split())))
  for j in range(m):
    if graph[i][j] == 0:
      empty.append([i,j])
    if graph[i][j] == 2:
      q.append([i, j])
      virus.append([i, j])
      
save = len(empty)
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

def find_virus (arr):
  visited = [[False for _ in range(m)] for _ in range(n)]
  affect = 0
  while q:
    x, y = q.popleft()
    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]

      if nx >= 0 and nx < n and ny >= 0 and ny < m:
        if arr[nx][ny] == 0 and not visited[nx][ny]:
          q.append([nx, ny])
          affect += 1
          visited[nx][ny] = True
  return affect

for walls in get_combi(empty, 3):
  # 벽 세우기
  for wall in walls:
    graph[wall[0]][wall[1]] = 1

  affect = find_virus(graph)
  for v in virus:
    q.append(v)

  if save-affect > result:
    result = save-affect
  # 벽 다시 없애 원래 상태로
  for wall in walls:
    graph[wall[0]][wall[1]] = 0

print(result- 3)

# 좋은 풀이
data = []
# 벽을 설치한 뒤의 맵
temp = [[0] * m for _ in range(n)]

def virus (x, y):
  for i in range(4):
    nx = x + dx[i]
    ny = y + dy[i]
    if nx >= 0 and nx < n and ny >= 0 and ny < m:
      if temp[nx][ny]:
        temp[nx][ny] = 2
        virus(nx, ny)

def get_score():
  score = 0
  for i in range(n):
    for j in range(m):
      if temp[i][j] == 0:
        score += 1
  return score
# 깊이 우선 탐색을 이용해 울타리를 설치하면서 매번 안전 영역의 크기 계산
def dfs(count):
  global result
  if count == 3:
    for i in range(n):
      for j in range(m):
        temp[i][j] = data[i][j]
    # 바이러스 전파 진행
    for i in range(n):
      for j in range(m):
        if temp[i][j] == 2:
          virus(i, j)
    result = max(result, get_score())
    return
  
  for i in range(n):
    for j in range(m):
      if data[i][j] == 0:
        data[i][j] = 1
        count += 1
        dfs(count)
        data[i][j] = 0
        count -= 1
dfs(0)