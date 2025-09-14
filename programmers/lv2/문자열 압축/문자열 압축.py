s ="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"

def solution(s):
  length = len(s)
  answer = length

  max_step = len(s) // 2

  for step in range(1, max_step+1):
    result = ""
    prev = ''
    prev_cnt = 0
    for i in range(0, len(s), step):    
      new = s[i: i+step]
      if len(prev) > 0 and prev == new:
        result = result[:-step]
        if prev_cnt > 1:
          result = result[:-len(str(prev_cnt))]
        result += str(prev_cnt + 1) + new
        prev_cnt += 1
      else:
        result += new
        prev_cnt = 1
      prev = new
    answer = min(answer, len(result))
  return answer

print(solution(s))