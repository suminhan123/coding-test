# 두번째 점프부터는 이전 점프한 거리보다 1 이상 더 긴 거리
# N번은 무조건 밟아야 한다


def solution (n):
  start = 1
  end = n
  result = 0

  while start <= end:
    mid = (start + end) // 2
    

    # 어찌보면 공차가 1인 등차수열의 합을 for문을 사용해서 시간 초과
    # => 등차 수열의 합 공식을 활용해보자
    # temp = 1
    # for _ in range(mid):
    #   jump += temp
    #   temp += 1

    jump = (mid * (mid + 1)) // 2

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