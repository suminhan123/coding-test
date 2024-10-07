#array = [10, -4, 3, 1, 5, 6, -35, 12, 21, -1]
# 이 중 연속된 몇 개의 수를 선택해서 구할 수 있는 합 중 가장 큰 합
n = int(input())
array = list(map(int, input().split()))

dp = [0] * (n)
dp[0] = array[0]

for i in range(1, n):
  dp[i] = max(array[i], dp[i-1] + array[i])
print(max(dp))
