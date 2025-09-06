from itertools import combinations


people = [20,20,20,30,50,60]
limit = 100

def contain_arr (arr, target):
  test = arr[:]
  for t in target:
    if t in test:
      test.remove(t)
    else:
      return False
  return True


def solution (people, limit):
  people = sorted(people)
  start_idx = 0
  end_idx = len(people) - 1
  answer = 0

  while start_idx < end_idx:
    if people[start_idx] + people[end_idx] <= limit:
      answer += 1
      start_idx += 1
    end_idx -= 1

  return len(people) - answer

print(solution(people, limit))