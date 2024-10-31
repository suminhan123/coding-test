# https://school.programmers.co.kr/learn/courses/30/lessons/43238?language=python3
def solution (n, times):
  start = 0
  end = n * max(times)
  result = 0
  while start <= end:
    mid = (start + end) // 2
    cnt = 0
    for t in times:
      cnt += mid // t

    if cnt < n:
      start = mid + 1
    else:
      end = mid - 1
      result = mid
  return result
    
print(solution(6, [7, 10]))
