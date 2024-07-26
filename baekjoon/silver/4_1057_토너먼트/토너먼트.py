# 실버4: https://www.acmicpc.net/problem/1057

total, jimin, hanso = map(int, input().split())
result = 0

while jimin != hanso:
  jimin = (jimin + 1) // 2
  hanso = (hanso + 1) // 2
  result += 1

print(result)