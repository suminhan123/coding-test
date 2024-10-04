n = 4
food = [1,3,1,5]

dp = [0]*n
dp[0] = food[0]
dp[1] = max(food[1], food[0])
for i in range(2, n):
  dp[i] = max(dp[i-2]+food[i], dp[i-1])

print(max(dp))