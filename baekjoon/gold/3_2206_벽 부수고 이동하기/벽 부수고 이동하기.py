# https://www.acmicpc.net/problem/2206
# 0 은 이동 가능, 1 은 이동 불가능
# 벽하나 부수고 이동하는 경우도 가능
from collections import deque

n, m = map(int, input().split())
graph = [list(map(int, input().strip())) for _ in range(n)]


# 한번 bfs 를 수행하고 나서 
# empty 일 경우 조합으로 모든 경우의수를 다 탐색하면 시간 초과
# visited 를 3차원 행렬을 통해 벽의 파괴를 파악할 수 있도록


# 이동 방향 (상, 우, 하, 좌)
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

def bfs(graph):
  q = deque()
  # visited[x][y][wall_broken] 형태로 방문 여부를 기록
  visited = [[[0] * 2 for _ in range(m)] for _ in range(n)]
  q.append((0, 0, 0))  # (x, y, 벽 부순 여부)
  visited[0][0][0] = 1

  while q:
    x, y, wall_broken = q.popleft()
        
    # 도착 지점에 도달한 경우
    if x == n - 1 and y == m - 1:
      return visited[x][y][wall_broken]
        
    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]
            
      # 경계를 넘어가는 경우
      if 0 <= nx < n and 0 <= ny < m:
        # 이동 가능한 경우 (0)
        if graph[nx][ny] == 0 and visited[nx][ny][wall_broken] == 0:
          visited[nx][ny][wall_broken] = visited[x][y][wall_broken] + 1
          q.append((nx, ny, wall_broken))
        # 벽을 부술 수 있는 경우 (1)
        elif graph[nx][ny] == 1 and wall_broken == 0 and visited[nx][ny][1] == 0:
          visited[nx][ny][1] = visited[x][y][wall_broken] + 1
          q.append((nx, ny, 1))
    
  return -1  # 도착할 수 없는 경우

result = bfs(graph)
print(result)