n, m = map(int, input().split())
ans = []
start = 1
def permutation(start):
  # 종료 조건
  if len(ans) == m:
    print(" ".join(map(str, ans)))
    return
  for i in range(start, n+1):
    if i not in ans:
      ans.append(i)
      permutation(i)
      ans.pop()
permutation(start)