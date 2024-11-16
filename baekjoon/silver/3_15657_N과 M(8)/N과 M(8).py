# https://www.acmicpc.net/problem/15657
n, m = map(int, input().split())
arr = list(map(int, input().split()))
ans = []
arr.sort()

def search(start):
  if len(ans) == m:
    print(" ".join(map(str, ans)))
    return
  
  for i in range(n):
    if start <= arr[i]:
      ans.append(arr[i])
      search(arr[i])
      ans.pop()
search(arr[0])