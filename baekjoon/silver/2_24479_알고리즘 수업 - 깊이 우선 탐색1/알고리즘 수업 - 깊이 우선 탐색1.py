# https://www.acmicpc.net/problem/24479
# i 번째 줄에는 정점 i의 방문 순서를 출력한다.


import sys
sys.setrecursionlimit(150000)

input = sys.stdin.readline

n, m, r = map(int, input().split())

graph = [[] for _ in range(n+1)]

for _ in range(m):
  a, b = map(int, input().split())
  graph[a].append(b)
  graph[b].append(a)


visited = [0] * (n+1)
count = 0

for item in graph:
  item.sort()

def dfs(start):
  global count
  count += 1
  visited[start] = count
  for i in graph[start]:
    if visited[i] == 0:
      dfs(i)

dfs(r)
for i in range(1, n+1):
  print(visited[i])