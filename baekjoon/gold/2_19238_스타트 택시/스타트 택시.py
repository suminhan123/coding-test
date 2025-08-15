from collections import deque
import copy

n, m, p = 6, 3, 15

graph = [
  [0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0]
]
x, y = 5, 4
customers = [
  [1, 1, 4, 5],
  [4, 3, 0, 5],
  [3, 1, 2, 4]
]




dx = [-1, 0, 1, 0]
dy = [0, 1, 0 ,-1]

def get_sort_distance(sx, sy, ex, ey):
  q = deque([])
  q.append((sx, sy))
  deep_graph = copy.deepcopy(graph)
  while q:
    x, y = q.popleft()
    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]

      if nx >= 0 and nx < n and ny >= 0 and ny < n:
        if deep_graph[nx][ny] == 0:
          deep_graph[nx][ny] = deep_graph[x][y] + 1
          q.append((nx, ny))
  return deep_graph[ex][ey] 

def get_find_sort_customer():
  result = [9999999999, (0, 0), (0, 0)]
  customer_idx = -1
  for idx, customer in enumerate(customers):
    start_x, start_y, des_x, des_y = customer
    distance = get_sort_distance(x, y, start_x, start_y)
    if (distance == result[0]):
      sx, sy = result[1]
      if start_x < sx:
        result = [distance, (start_x, start_y), (des_x, des_y)]
        customer_idx = idx
      else:
        if start_y < sy:
          result = [distance, (start_x, start_y), (des_x, des_y)]
          customer_idx = idx
    if (distance < result[0]):
      result = [distance, (start_x, start_y), (des_x, des_y)]
      customer_idx = idx
  del customers[customer_idx]
  return result

while len(customers) > 0:
  [distance, (cus_start_x, cus_start_y), (cus_dest_x, cus_dest_y)] = get_find_sort_customer()
  if (distance > p):
    p = -1
    break
  car_distance = get_sort_distance(cus_start_x, cus_start_y, cus_dest_x, cus_dest_y)

  p = p - distance - car_distance + (car_distance) * 2
  if p <= 0:
    p = -1
    break
  x, y = cus_dest_x, cus_dest_y

print(p)