# https://school.programmers.co.kr/learn/courses/30/lessons/49994

def solution(dirs):
  dx = [0, 1, 0, -1]
  dy = [1, 0, -1, 0]
  dir_map = {
    "U":0,
    "R":1,
    "D":2,
    "L":3
  }
  x, y = 0, 0
  maps = set()
  for d in dirs:
    nx = x + dx[dir_map[d]]
    ny = y + dy[dir_map[d]]
        
    if nx >= -5 and nx <= 5 and ny >= -5 and ny <= 5:
      path = ((x,y), (nx, ny))
      reverse_path = ((nx, ny), (x,y))
      if path not in maps or reverse_path not in maps:
        maps.add(path)
        maps.add(reverse_path)
      x, y = nx, ny
  return len(maps) // 2