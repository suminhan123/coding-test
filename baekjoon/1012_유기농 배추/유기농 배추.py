# 실버 2 : https://www.acmicpc.net/problem/1012

# 파이썬의 재귀 호출 한도를 설정 => 없으면 런타임 에러 (RecursionError) 발생!!!
import sys 
sys.setrecursionlimit(10000) 

t = int(input())

dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

def dfs(x, y):
  for i in range(4):
    nx = x + dx[i]
    ny = y + dy[i]
    if (nx >= 0 and ny >= 0 and nx < n and ny < m):
      if (graph[nx][ny] == 1):
        graph[nx][ny] = -1 # 방문 처리를 visited 배열 생성하지 말고 그냥 배열 -1 값으로 초기화
        dfs(nx, ny)

for _ in range(t):
  m, n, k = map(int, input().split())
  graph = [[0 for _ in range(m)] for _ in range(n)]
  for _ in range(k):
    y, x = map(int, input().split())
    graph[x][y] = 1
  result = 0
  for i in range(n):
    for j in range(m):
      if graph[i][j] == 1:
        dfs(i, j)
        result += 1
  print(result)
