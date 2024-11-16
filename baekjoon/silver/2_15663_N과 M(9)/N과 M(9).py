# https://www.acmicpc.net/problem/15663
# n, m = 4, 2
# arr = [9, 7, 9, 1]

n, m = map(int, input().split())
arr = list(map(int, input().split()))
arr.sort()

ans = []
visited = [0] * n

def search():
  check = 0
  if len(ans) == m:
    print(" ".join(map(str, ans)))
    return
  for i in range(n):
    if check != arr[i] and visited[i] == 0:
      ans.append(arr[i])
      visited[i] = 1
      check = arr[i]

      search()

      ans.pop()
      visited[i] = 0

search()