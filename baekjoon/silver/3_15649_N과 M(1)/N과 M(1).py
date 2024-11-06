# 1부터 N까지 중복없는 M개의 요소를 가지는 수열을 구하기
n, m = map(int, input().split())
ans = []

def permutation():
  if len(ans) == m:
    print(" ".join(map(str, ans)))
    return
  for i in range(1, n+1):
    if i not in ans:
      ans.append(i)
      permutation()
      ans.pop()

permutation()