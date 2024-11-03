# https://www.acmicpc.net/problem/2805
# 이진 탐색
# 절단기에 설정할 수 있는 높이의 최댓값

n, m = map(int, input().split())

arr = list(map(int, input().split()))

start = 0
end = max(arr)
result = 0

while start <= end:
  mid = (start + end) // 2
  trees = 0
  for item in arr:
    if item > mid:
      trees += item - mid
  if trees < m:
    end = mid - 1
  else:
    start = mid + 1
    result = mid
    
print(result)