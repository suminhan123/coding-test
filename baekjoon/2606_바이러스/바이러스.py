# 실버 3 : https://www.acmicpc.net/problem/2606

from collections import deque

computers = int(input())
count = int(input())
graph = [[] for _ in range(computers + 1)]

for _ in range(count):
  x, y = map(int, input().split())
  graph[x].append(y)
  graph[y].append(x)

visited = [False]*(computers + 1)

result = 0

q = deque()
q.append(1)
visited[1] = True

while q:
  x= q.popleft()
  result += 1
  for i in graph[x]:
    if not visited[i]:
      q.append(i)
      visited[i] = True
print(result-1)