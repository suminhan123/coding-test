n, m = map(int, input().split())

arr = list(map(int, input().split()))
arr.sort()
ans = []

def permutation(arr):
  if len(ans) == m:
    print(" ".join(map(str, ans)))
    return
  for i in arr:
    if i not in ans:
      ans.append(i)
      permutation(arr)
      ans.pop()
permutation(arr)