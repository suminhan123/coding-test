
# 1. 제일 뒤에 X 붙이기
# 2. 뒤집고 뒤에 Y 붙이기
t = int(input())
for i in range(1, t+1):
  s = input()
  e = input()
  result = " No"
  while True:
    if e[-1] == "X":
      e = e[:-1]

    elif e[-1] == "Y":
      e = e[:-1]
      e = e[::-1]

    if len(e) == len(s):
      if e == s:
        result = " Yes"
      break
  print("#"+str(i)+result)