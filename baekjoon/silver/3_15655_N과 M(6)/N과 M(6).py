# https://www.acmicpc.net/problem/15655
n, m = map(int, input().split())
arr = list(map(int, input().split()))
arr.sort()

ans = []

def search(start):
  if len(ans) == m:
    print(" ".join(map(str, ans)))
    return
  
  for i in range(n):
    if arr[i] > start:
      ans.append(arr[i])
      search(arr[i])
      ans.pop()
search(0)