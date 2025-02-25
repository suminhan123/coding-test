# https://www.acmicpc.net/problem/1374

n = int(input())
graph = []
end_num = 0
for _ in range(n):
  x, y, z = map(int, input().split())
  graph.append([x, y, z])
  end_num = max(end_num, z)

dp = [0] * (end_num + 1)

for value in graph:
  num, start, end = value

  for j in range(start, end):
    dp[j] += 1
print(max(dp))


## 결과 : 메모리 초과

# 좋은 풀이
from heapq import heappop, heappush
# 최소힙 사용해 불필요한 연산 및 메모리 사용 X


graph = []
n = int(input())
for _ in range(n):
  num, start, end = map(int, input().split())
  graph.append([start, end])

graph.sort(key=lambda x: x[0])

q = []
heappush(q, graph[0][1]) 

for i in range(1, n):
  if graph[i][0] < q[0]:
    heappush(q, graph[i][1])
  else:
    heappop(q)
    heappush(q, graph[i][1])

print(len(q))