# https://school.programmers.co.kr/learn/courses/30/lessons/12978

def solution(n, road, k):
  result = 0
  INF = int(1e9)
  graph = [[INF] * (n+1) for _ in range(n+1)]
  for i in range(1, n+1):
    for j in range(1, n+1):
      if i == j:
        graph[i][j] = 0
        
  for r in road:
    x, y, c = r
    graph[x][y] = min(graph[x][y], c)
    graph[y][x] = min(graph[y][x], c)

  for t in range(1, n+1):
    for i in range(1, n+1):
      for j in range(1, n+1):
        graph[i][j] = min(graph[i][j], graph[i][t]+graph[t][j])
  for i in range(1, len(graph[1])):
    if graph[1][i] <= k:
      result += 1
  return result