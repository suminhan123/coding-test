# https://www.acmicpc.net/problem/7569
# 토마토 인접한 곳에 있는 위, 아래, 왼쪽, 오른쪽, 앞, 뒤 익X -> 익
# 다 익기 까지 걸리는 최소 일 수
# 1 : 익은 토마토, 0 : 익지 않은 토마토, -1 : 들어가있지 않은 칸

from collections import deque

m, n, h = map(int, input().split())
graph = [[] for _ in range(h)]

for i in range(n * h):
  g_h = i // n
  arr = list(map(int, input().split()))
  graph[g_h].append(arr)


dx = [0, 0, 0, 0, -1, 1]
dy = [0, 0, -1, 1, 0, 0]
dz = [-1, 1, 0, 0, 0, 0]

result = 0
tomatos = []

q = deque()
untomato = 0
for z in range(h):
  for x in range(n):
    for y in range(m):
      if graph[z][x][y] == 1:
        tomatos.append((z, x, y))
      if graph[z][x][y] == 0:
        untomato += 1
        

def search ():
  global untomato
  while q:
    z, x, y = q.popleft()
    for i in range(6):
      nz = z + dz[i]
      nx = x + dx[i]
      ny = y + dy[i]
      if nz >= 0 and nz < h and nx >= 0 and nx < n and ny >= 0 and ny < m:
        if graph[nz][nx][ny] == 0:
          graph[nz][nx][ny] = 1
          untomato -= 1
          tomatos.append((nz, nx, ny))

if untomato == 0:
  print(0)
else:
  while True:
    for _ in range(len(tomatos)):
      z, x, y = tomatos.pop()
      q.append((z, x, y))
      
    search()
    
    if len(tomatos) > 0:
      result += 1
    else:
      if untomato != 0:
        print(-1)
      else:
        print(result)
      break
