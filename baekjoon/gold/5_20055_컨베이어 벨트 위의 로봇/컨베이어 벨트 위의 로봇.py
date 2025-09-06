n, k = map(int, input().split())
container = list(map(int, input().split()))
robots = []

down_idx = len(container) // 2 - 1
def shift_container ():
  return [[container[-1]] + container[:-1], [r+1 for r in robots if r+1 != down_idx]]
answer = 1
while(True):
  # 한칸 회전
  container, robots = shift_container()
  # 로봇 이동
  if (len(robots)>0):
    for idx, robot in enumerate(robots):
      next_step = (robot + 1) % (n * 2)
      if next_step not in robots and container[next_step] >= 1:
        container[next_step] -= 1
        robots[idx] = next_step
  robots = [r for  r in robots if r != down_idx]

  # 새로운 로봇 추가
  if (container[0] >= 1):
    robots.append(0)
    container[0] -= 1
  if (container.count(0) == k):
    break
  else:
    answer += 1


print(answer)