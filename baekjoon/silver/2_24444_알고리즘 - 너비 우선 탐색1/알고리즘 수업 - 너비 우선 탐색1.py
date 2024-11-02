# https://www.acmicpc.net/problem/24444
import sys
from collections import deque
sys.setrecursionlimit(10 ** 6)
input = sys.stdin.readline


q = deque()
n, m, r = map(int, input().split())

visited = [0] * (n+1)

graph = [[] for _ in range(n+1)]

for _ in range(m):
  a, b = map(int, input().split())
  graph[a].append(b)
  graph[b].append(a)

for item in graph:
  item.sort()

visited[r] = 1
q.append(r)
cnt = 1
while q:
  x = q.popleft()
  for i in graph[x]:
    if visited[i] == 0:
      q.append(i)
      cnt += 1
      visited[i] = cnt

for i in range(1, n+1):
  print(visited[i])