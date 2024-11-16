# https://www.acmicpc.net/problem/15664

n, m = map(int, input().split())
arr = list(map(int, input().split()))
arr.sort()

ans = []
visited = [0] * n

def search(start):
  check = 0

  if len(ans) == m:
    print(" ".join(map(str, ans)))
    return
  
  for i in range(n):
    if check != arr[i] and visited[i] == 0 and arr[i] >= start:
      ans.append(arr[i])
      visited[i] = 1
      check = arr[i]

      search(arr[i])

      visited[i] = 0
      ans.pop()

search(arr[0])