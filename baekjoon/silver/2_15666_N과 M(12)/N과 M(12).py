# https://www.acmicpc.net/problem/15666

n, m = map(int, input().split())
arr = list(map(int, input().split()))
ans = []
arr.sort()

def search(start):
  check = 0
  if len(ans) == m:
    print(" ".join(map(str, ans)))
    return
  
  for i in range(n):
    if arr[i] != check and arr[i] >= start:
      ans.append(arr[i])
      check = arr[i]

      search(arr[i])

      ans.pop()

search(arr[0])