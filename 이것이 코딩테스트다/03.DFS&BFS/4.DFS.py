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
visited = [False]* 9

def dfs(v):
  print("방문", v)

  visited[v] = True

  for node in graph[v]:
    if not visited[node]:
      dfs(node)


dfs(1)