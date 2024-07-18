test = int(input())

def combination (n, m):
  if (n == m):
    return 1
  first = 1
  second = 1
  for i in range(n):
    first = first * (m - i)
  for j in range(n):
    second = second * (n - j)
  return first // second


for _ in range(test):
  n, m = map(int, input().split())
  print(combination(n, m))
