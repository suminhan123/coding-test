from heapq import heappop, heappush

n, m, k = 6, 3, 2
graph =[
  [3000, 100, 1],
  [1500, 200, 2],
  [1000, 500, 3],
  [1500, 100, 4],
  [1500, 100, 5],
  [1500, 100, 6]
]

n, m, k = map(int, input().split())
deca = k+1
lines = [[] for _ in range(m)]

for i in range(n):
  d, h = map(int, input().split())
  lines[i % m].append([d, h, i+1, i % m])

result = 0
while True:
  q = []
  for i in range(m):
    if (len(lines[i]) > 0):
      d, h, n, l = lines[i][0]
      heappush(q, [-d, -h, n, l])
  nd, nh, n, l = q[0]
  lines[l].pop(0)
  result += 1
  if (n == deca):
    break
print(result - 1)