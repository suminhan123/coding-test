# https://www.acmicpc.net/problem/31926

n = int(input())

result = 10 # 처음(8), 그 다음(1), 마지막(1)


if n == 1:
  print(10)
elif n == 2:
  print(11)
else: 
  temp = 2
  n = n - 1
  while True:
    if n < 1:
      break
    result += 1
    n -= temp
    temp *= 2
  

  print(result)
