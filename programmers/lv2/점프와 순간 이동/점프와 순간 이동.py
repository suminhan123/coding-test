# https://school.programmers.co.kr/learn/courses/30/lessons/12980
def solution(n):
  result = 0
  if n % 2 != 0:
    n -= 1
    result += 1
  while True:
    n = n // 2
    if n % 2 != 0:
      n -= 1
      result += 1
    if n == 0:
      break
  return result