t = int(input())
for _ in range(t):
  n, m = map(int, input().split())

  s = list(map(int, input().split(" ")))
  gold = []
  idx = 0
  while idx != n*m:
    gold.append(s[idx: idx+4])
    idx+= 4

  dx = [-1, 0, 1]
  dp = [[0] * m for _ in range(n)]

  for i in range(n):
    dp[i][0]=gold[i][0]

  for j in range(1, m):
    for i in range(n):
      for k in range(3):
        nx = i + dx[k]
        ny = j -1
        if nx >= 0 and nx < n and ny >= 0 and ny < m:
          dp[i][j] = max(dp[i][j], gold[i][j] + dp[nx][ny])

  result = 0
  for i in range(n):
    result = max(result, dp[i][m-1])
  print(result)