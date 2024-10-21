n, m = 4, 6
data = [19, 15, 10, 17]

start = 0
end = max(data)
result = 0

while start <= end:
  mid = (start + end) // 2
  sum_data = 0
  for i in data:
    if i > mid:
      sum_data += i - mid
  # 떡양이 부족한 경우 -> 조사하는 값을 줄여야함
  if sum_data < m:
    end = mid - 1
  else:
    result = mid
    start = mid + 1
   
print(result)