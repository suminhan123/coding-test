# https://www.acmicpc.net/problem/2458
import sys
input = sys.stdin.readline

n,m = map(int, input().split())
graph = [[] for _ in range(n+1)]
# graph = [[], [3, 5], [], [4], [2, 6], [2, 4], []]

for _ in range(m):
  a, b = map(int, input().split())
  graph[a].append(b)

visited = [[0] * (n+1) for _ in range(n+1)]

def search(start, idx):
  for i in graph[idx]:
    if not visited[start][i]:
      visited[start][i] = 1
      visited[i][start] = 1
      search(start, i)

for i in range(1, n+1):
  visited[i][i] = 1
  search(i, i)

result = sum([1 if sum(visited[i]) == n else 0 for i in range(1,n+1)])
print(result)