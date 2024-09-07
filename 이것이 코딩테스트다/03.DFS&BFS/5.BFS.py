from collections import deque

graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
]

visited = [False] * 9
q = deque()

def bfs (start):
  visited[start] = True
  q.append(start)

  while q:
    v = q.popleft()
    print("방문", v)
    for node in graph[v]:
      if not visited[node]:
        q.append(node)
        visited[node] = True
bfs(1)