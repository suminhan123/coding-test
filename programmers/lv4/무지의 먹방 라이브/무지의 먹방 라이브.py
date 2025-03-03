
from heapq import heappop, heappush

def solution (food_times, k):
  result = -1
  q = []
  for i in range(len(food_times)):
    heappush(q, [food_times[i], i+1])

  food_num = len(food_times) # 남은 음식의 개수
  previous = 0  # 이전에 제거한 음식의 food_time

  # 음식 하나하나 돌면서 처리하려고 하면 시간 초과 발생
  # 힙으로 하나의 음식을 다 처리하기 -> 남은 음식의 경우는 변경하지 X
  while q:
    min_food = q[0][0] - previous
    remain_time = min_food * food_num
    # 하나의 음식을 전부다 처리할 수 있는 경우
    if remain_time <= k:
      k -= remain_time
      previous, _ = heappop(q)
      food_num -= 1
    # 불가능한 경우
    else:
      idx = k % food_num
      q.sort(key=lambda x:x[1])
      result = q[idx][1]
      break
  return result


food_times = [3, 1, 2]
k = 5
print(solution(food_times, k))