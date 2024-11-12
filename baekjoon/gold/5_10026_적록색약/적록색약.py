# https://www.acmicpc.net/problem/10026
from collections import deque
import copy

n = int(input())
graph = []
for _ in range(n):
  graph.append(list(input().strip()))

gr_graph = copy.deepcopy(graph)
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]
def bfs (word, i, j, gr, graph):
  q = deque()
  q.append((i, j))
  graph[i][j] = "C"

  while q:
    x, y = q.popleft()
    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]

      if nx >= 0 and nx < n and ny >= 0 and ny < n:
        if (not gr and graph[nx][ny] == word) or (gr and graph[nx][ny] == word and word=="B"):
          graph[nx][ny] = "C"
          q.append((nx, ny))
        elif gr and word != "B" and (graph[nx][ny] == "R" or graph[nx][ny] == "G"):
          graph[nx][ny] = "C"
          q.append((nx, ny))
result = 0
gr_result = 0
for i in range(n):
  for j in range(n):
    if graph[i][j] != "C":
      bfs(graph[i][j], i, j, False, graph)
      result += 1
    if gr_graph[i][j] != "C":
      bfs(gr_graph[i][j], i, j, True, gr_graph)
      gr_result += 1
print(result, gr_result)
