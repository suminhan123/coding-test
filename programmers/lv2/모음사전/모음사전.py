# https://school.programmers.co.kr/learn/courses/30/lessons/84512
# A, E, I, O, U 로만 이루어진 단어




def solution(word):
  words = ["A", "E", "I", "O", "U"]
  ans = []
  count = 0
  result = -1

  def search():
    nonlocal count, result
    if len(ans) == len(words):
      return
    for w in words:
      ans.append(w)
      count += 1 
      if "".join(ans) == word:
        result = count
        return
      search()
      if "".join(ans) == word:
        result = count
        return
      ans.pop()
  search()

  return result

print(solution("EIO"))