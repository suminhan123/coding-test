# https://www.acmicpc.net/problem/2847
n = int(input())
levels = []
for _ in range(n):
  levels.append(int(input()))
result = 0

for i in range(n-1, 0, -1):
  if levels[i-1] >= levels[i]:
    result += levels[i-1] - levels[i] + 1
    levels[i-1] = levels[i] - 1

print(result)