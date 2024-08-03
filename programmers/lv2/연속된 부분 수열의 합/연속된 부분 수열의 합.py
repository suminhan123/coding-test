# https://school.programmers.co.kr/learn/courses/30/lessons/178870
    
def solution (sequence, k):
  result = []
  for i in range(len(sequence)):
    if sequence[i] == k:
      result.append([i, i])
      break
    for j in range(i+1, len(sequence)):
      num = sum(sequence[i: j+1])
      if num == k:
        result.append([i, j])
        continue
      elif num > k:
        break
  arr = sorted(result, key = lambda x: (x[1]-x[0], x[0]))
  return arr[0]
  
sequence = [2, 2, 2, 2, 2]
k = 6
print(solution(sequence, k))