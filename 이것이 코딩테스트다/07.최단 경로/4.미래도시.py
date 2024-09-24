# 1번 회사에 A가 위치 X번 회사에 방문해 물건 판매
# 양방향 이동이 가능, 이동 1시간 소요
# 1번 -> k번 -> X번

# 회사 개수, 경로 개수
n, m = map(int, input().split())

INF = int(1e9)

graph = [[INF] * (n+1) for _ in range(n+1)]

for _ in range(m):
  a, b = map(int, input().split())
  graph[a][b] = 1
  graph[b][a] = 1
x, k = map(int, input().split())
for i in range(1, n+1):
  for j in range(1, n+1):
    if i == j:
      graph[i][j] = 0


for k in range(1, n+1):
  for i in range(1, n+1):
    for j in range(1, n+1):
      graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])

result = graph[1][k] + graph[k][x]
if result >= INF:
  print(-1)
else:
  print(result)