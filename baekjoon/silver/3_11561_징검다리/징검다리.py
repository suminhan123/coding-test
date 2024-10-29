# 두번째 점프부터는 이전 점프한 거리보다 1 이상 더 긴 거리
# N번은 무조건 밟아야 한다


def solution (n):
  start = 0
  end = n
  result = 0

  while start <= end:
    mid = (start + end) // 2
    jump = 0
    temp = 1
    for _ in range(mid):
      jump += temp
      temp += 1

    if jump == n:
      result = mid
      break
    elif jump > n:
      end = mid - 1
    else:
      result = mid
      start = mid + 1
  return result

t = int(input())

for _ in range(t):
  n = int(input())
  print(solution(n))