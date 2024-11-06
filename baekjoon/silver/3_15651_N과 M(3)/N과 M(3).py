n, m = map(int, input().split())
ans = []

def permutation():
  if len(ans) == m:
    print(" ".join(map(str, ans)))
    return
  
  for i in range(1, n+1):
    ans.append(i)
    permutation()
    ans.pop()

permutation()