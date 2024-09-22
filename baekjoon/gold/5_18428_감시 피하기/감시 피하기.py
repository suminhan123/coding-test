# https://www.acmicpc.net/problem/18428
import copy

flag = 0
empty = []
teacher = []
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]
n = int(input())
graph = []
for i in range(n):
  graph.append(list(input().split()))
  for j in range(n):
    if graph[i][j] == "X":
      empty.append([i, j])
    if graph[i][j] == "T":
      teacher.append([i, j])

def get_combi (arr,n):
  result = []
  def combi (element, idx):
    if (len(element) == n):
      result.append(element[:])
      return
    for i in range(idx, len(arr)):
      element.append(arr[i])
      combi(element, i+1)
      element.pop()
  combi([], 0)
  return result

def find_student (x, y, d, graph):
  global flag
  # 맵을 벗어나는 경우
  if x >= n or y >= n or x < 0 or y < 0:
    flag = 0
    return
  # 맵에서 장애물을 만나는 경우
  if graph[x][y] == "O":
    flag = 0
    return
  # 맵에서 학생을 만나는 경우
  if graph[x][y] == "S":
    flag = 1
    return
  find_student(x+dx[d], y+dy[d], d, graph)

# 탐색 후 다시 초기화하기 위해 복사해두기
copy_graph = copy.deepcopy(graph)
count = 0
result = 0
for wall1, wall2, wall3 in get_combi(empty, 3):
  graph[wall1[0]][wall1[1]] = "O" 
  graph[wall2[0]][wall2[1]] = "O"
  graph[wall3[0]][wall3[1]] = "O"

  for t in teacher:
    tx, ty = t
    for i in range(4):
      nx = tx + dx[i]
      ny = ty + dy[i]

      find_student(nx, ny, i, graph)
      # 선생님 위치에서 조사했더니 학생 발견하는 경우
      if flag == 1:
        count += 1
        break
    # 다음 선생님 탐색할 필요없기에 패스
    if flag == 1:
      break
  if count == 0:
    result += 1
    break
  graph = copy.deepcopy(copy_graph)
  count = 0
if result > 0:
  print("YES")
else:
  print("NO")