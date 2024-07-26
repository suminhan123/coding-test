# 실버 1 : https://www.acmicpc.net/problem/1679

n = int(input())
nums = list(map(int, input().split()))
nums.sort()
max_cnt = int(input())

max_nums = max(nums) * max_cnt
dp = [0]*(max_nums+1)

for i in range(1, max_nums+1):
  if i-nums[0] >= 0:
    dp[i] = dp[i-nums[0]] + 1
  for j in range(1, len(nums)):
    if i - nums[j] >= 0:
      if min(dp[i], dp[i - nums[j]]+1) <= max_cnt:
        dp[i] = min(dp[i], dp[i - nums[j]]+1)

for i, v in enumerate(dp):
  if v > max_cnt:
    if i % 2 == 0:
      print("holsoon win at", i)
      break
    else:
      print("jjaksoon win at", i)
      break
