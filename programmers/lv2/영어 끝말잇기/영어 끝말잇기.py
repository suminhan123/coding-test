# https://school.programmers.co.kr/learn/courses/30/lessons/12981

def solution(n, words):
  person = 0
  time = 0
    
  for i in range(1, len(words)):
    if len(words[i]) <=1 or words[i] in words[:i] or words[i-1][-1] != words[i][0]:
      person = (i) % n + 1
      time = (i) // n + 1
      break
  return [person, time]