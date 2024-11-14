# https://www.acmicpc.net/problem/2212
# 고속도로 위에 최대 K개의 집중국을 세울 수 있다

# n = 10
# k = 5

# node = [20, 3, 14, 6, 7, 8, 18, 10, 12, 15]
import sys
sys.setrecursionlimit(10 ** 6)
input = sys.stdin.readline

n = int(input())
k = int(input())
node = list(map(int, input().split()))

m = max(node)
node.sort()

ans = []
result = int(1e9)
def search(start):
  global result
  if len(ans) == k:
    idx = 0
    temp = 0
    check = []
    for n in node:
      if n not in check:
        if idx+1 >=k:
          temp += abs(n - ans[idx])
        elif abs(n - ans[idx]) < abs(n - ans[idx + 1]):
          temp += abs(n - ans[idx])
        else:
          temp += abs(n - ans[idx + 1])
          idx += 1
        check.append(n)
    result = min(result, temp)

    return
  for i in range(m+1):
    if i >= start and i not in ans:
      ans.append(i)
      search(i)
      ans.pop()
search(node[0])

print(result)