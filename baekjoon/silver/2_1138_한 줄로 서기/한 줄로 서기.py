# https://www.acmicpc.net/problem/1138
# 자기보다 큰 사람이 왼쪽에 몇 명있는 지 기억

n = int(input())
arr = list(map(int, input().split(" ")))

result = [0] * n
for i in range(n):
  cnt = 0
  for j in range(n):
    if cnt == arr[i] and result[j] == 0:
      result[j] = i+1
      break
    elif result[j] == 0:
      cnt+= 1

print(" ".join(map(str, result)))