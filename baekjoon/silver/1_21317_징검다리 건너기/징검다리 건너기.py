# https://www.acmicpc.net/problem/21317
# n개의 돌이 일렬로 나열되어 있는 강가 -> 마지막 돌 틈 사이에 산삼
# 다음돌로 이동하는 작은 점프
# 1개의 돌을 건너뛰어 이동하는 큰 점프
# 2개의 돌을 점프 => 돌 번호 상관없이 k 만큼 에너지 소비
# 산삼을 얻기 위해 필요한 에너지의 최솟값
# 아직 성공 못함

n = int(input())
one_jump = [0]
two_jump = [0]
for _ in range(n-1):
  o, t = map(int, input().split())
  one_jump.append(o)
  two_jump.append(t)

k = int(input())

def solution (n):
  if n == 1:
    return 0
  elif n == 2:
    return one_jump[1]
  elif n == 3:
    return min(two_jump[2], one_jump[1] + one_jump[2])
  else:
    dp1 = [0] * n
    dp2 = [0] * n # 한번의 3칸 점프도 고려한 dp

    dp1[1] = one_jump[1]
    for i in range(2, n):
      dp1[i] = min(dp1[i-1] + one_jump[i], dp1[i-2] + two_jump[i])
    dp2[3] = k
    for i in range(4, n):
      if i == 4:
        dp2[i] += min(dp2[i-1] + one_jump[i], dp1[i-3] + k)
      else:
        dp2[i] += min(dp2[i-1] + one_jump[i], dp2[i-2] + two_jump[i], dp1[i-3]+k)
  return min(dp1[-1], dp2[-1])

print(solution(n))