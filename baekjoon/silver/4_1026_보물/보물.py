# https://www.acmicpc.net/problem/1026
n = int(input())
b = list(map(int, input().split()))
a = list(map(int, input().split()))

b.sort(reverse=True)
a.sort()

result = 0
for i in range(n):
  result += b[i] * a[i]

print(result)