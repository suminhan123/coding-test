# https://school.programmers.co.kr/learn/courses/30/lessons/12977
def isPrime (num):
  result = True
  for i in range(2, num):
    if num % i == 0:
      result = False
      break
  return result

def solution(nums):
  ans = []
  # 조합
  nums.sort()
  result = 0
  def search(start):
    nonlocal result
    if len(ans) == 3:
      if isPrime(sum(ans)):
        result += 1
      return
    for i in nums:
      if i not in ans and i >= start:
        ans.append(i)
        search(i)
        ans.pop()
  search(nums[0])
  return result

from itertools import combinations

c = combinations([1,2,3,4], 3)
print(list(c))