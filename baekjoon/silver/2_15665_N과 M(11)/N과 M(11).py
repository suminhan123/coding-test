# https://www.acmicpc.net/problem/15665

n, m = map(int, input().split())
arr = list(map(int, input().split()))
arr.sort()

ans = []

def search():
  check = 0
  if len(ans) == m:
    print(" ".join(map(str, ans)))
    return
  
  for i in range(n):
    if arr[i] != check:
      ans.append(arr[i])
      check = arr[i]

      search()

      ans.pop()

search()