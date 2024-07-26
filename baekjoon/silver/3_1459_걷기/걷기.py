# 실버3 : https://www.acmicpc.net/problem/1459

x, y, w, s = map(int, input().split())
result = 0

# 무조건 가로, 세로로 이동
if w * 2 <= s:
  result = w*(x+y)

# 대각선을 최대한 많이
else:
  if w < s:
    result = min(x,y)*s + abs(x-y) * w
  else:
    if abs(x-y) % 2 == 0:
      result = min(x,y)*s + abs(x-y) * s
    else:
      result = min(x,y)*s + (abs(x-y) -1) * s + w

    
print(result)