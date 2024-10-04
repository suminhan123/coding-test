n, m = map(int, input().split())
moneys = []
for _ in range(n):
  moneys.append(int(input()))

INF = int(1e9)
dp = [INF] * (m+1)
min_money = min(moneys)

for money in moneys:
  if m >= money:
    dp[money] = 1

for i in range(min_money+1, m+1):
  for money in moneys:
    if i-money > 0:
      dp[i] = min(dp[i], dp[i-money]+1)

if dp[m] == INF:
  print(-1)
else:
  print(dp[m])