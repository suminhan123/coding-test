import sys
input = sys.stdin.readline
INF = int(1e9)

# 노드랑 간선의 개수 입력받기
n, m = map(int, input().split())
# 시작 노드 번호를 입력받기
start = int(input())
# 각 노드에 연결되어 있는 노드에 대한 정보를 담는 리스트 만들기
graph = [[] for _ in range(n+1)]
# 방문한 적이 있는지 체크하는 목적의 리스트 만들기
visited = [False] * (n+1)
distance = [INF] * (n+1)

for _ in range(m):
  a, b, c = map(int, input().split())
  graph[a].append((b,c))

# 방문하지 않은 노드 중에서 가장 최단 거리가 짧은 노드의 번호를 반환
def get_smallest_node():
  min_value = INF
  index = 0
  for i in range(1, n+1):
    if distance[i] < min_value and not visited[i]:
      min_value = distance[i]
      index = i
  return index

def dijkstra(start):
  distance[start] = 0
  visited[start] = True
  for j in graph[start]:
    distance[j[0]] = j[1]
  
  # 시작노드를 제외한 나머지 n-1 개의 노드에대해서 반복
  for _ in range(n-1):
    now = get_smallest_node()
    visited[now] = True
    for node in graph[now]:
      cost = distance[now] + node[1]
      if distance[node[0]] > cost:
        distance[node[0]] = cost

dijkstra(start)

for i in range(1, n+1):
  if distance[i] == INF:
    print("Infinity")
  else:
    print(distance[i])