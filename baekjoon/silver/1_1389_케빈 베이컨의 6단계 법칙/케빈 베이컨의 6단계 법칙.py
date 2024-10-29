# 두 사람이 최소 몇 단계 만에 이어질 수 있을 지
# 케빈 베이컨의 수가 가장 작은 사람을 출력(여러 명일 경우 가장 작은 사람을 출력)

n, m = map(int, input().split())
INF = int(1e9)
graph = [[INF] * (n+1) for _ in range(n+1)]

for i in range(1, n+1):
  for j in range(1, n+1):
    if i == j:
      graph[i][j] = 0

for _ in range(m):
  x, y = map(int, input().split())
  graph[x][y] = 1
  graph[y][x] = 1

for k in range(1, n+1):
  for a in range(1, n+1):
    for b in range(1, n+1):
      graph[a][b] = min(graph[a][b], graph[a][k] + graph[k][b])


sumary = INF
result = n
temp = 0

for i in range(1, n+1):
  for j in range(1, n+1):
    temp += graph[i][j]

  if sumary == temp:
    result = min(result, i)
  elif sumary > temp:
    sumary = temp
    result = i
  temp = 0

print(result)