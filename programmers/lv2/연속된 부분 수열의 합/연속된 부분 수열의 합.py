# https://school.programmers.co.kr/learn/courses/30/lessons/178870
    
def solution(sequence, k):
  result = []
  sum = 0
  lidx = 0
  ridx = -1
    
  while True:
    if sum < k:
      ridx += 1
      if ridx >= len(sequence):
        break

      sum += sequence[ridx]
    else:
      sum -= sequence[lidx]
      if lidx >= len(sequence):
        break
      lidx += 1
    if sum == k:
      result.append([lidx, ridx])
    
  result.sort(key=lambda x: (x[1]-x[0], x[0]))
  return result[0]



sequence = [2, 2, 2, 2, 2]
k = 6
print(solution(sequence, k))