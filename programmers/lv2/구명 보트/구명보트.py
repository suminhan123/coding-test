from itertools import combinations


people = [70, 80, 50]
limit = 100

def contain_arr (arr, target):
  test = arr[:]
  for t in target:
    if t in test:
      test.remove(t)
    else:
      return False
  return True


def solution (people = [70, 50, 80, 50], limit = 100):
  answer = 0
  people_cnt = len(people)
  if sum(people) <= limit: return 1

  for i in range(people_cnt - 1 , 0, -1):
    combi_list =sorted([[sum(peo), [j for j in peo]]  for peo in list(combinations(people, i)) if sum(peo) <= limit], key=lambda x:x[0], reverse=True) 
    for combi in combi_list:
      total, people_list = combi
      if contain_arr(people, people_list):
        for p in people_list:
          people.remove(p)
        answer += 1
  return answer

print(solution(people, limit))