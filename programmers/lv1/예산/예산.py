# https://school.programmers.co.kr/learn/courses/30/lessons/12982

def solution(d, budget):
  d.sort()
  result = 0
  for i in d:
    budget -= i
    if budget >= 0:
      result+= 1
    else:
      break
  return result