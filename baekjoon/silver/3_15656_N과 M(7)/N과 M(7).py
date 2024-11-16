# https://www.acmicpc.net/problem/15656
n, m = map(int, input().split())
arr = list(map(int, input().split()))
ans = []
arr.sort()

def search():
  if len(ans) == m:
    print(" ".join(map(str, ans)))
    return
  
  for i in range(n):
    ans.append(arr[i])
    search()
    ans.pop()
search()