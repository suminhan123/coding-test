def binary_search(array, target, start, end):
  while start<=end:
    mid = (end + start) // 2

    if array[mid] < target:
      start = mid+1
    elif array[mid] > target:
      end = mid-1
    else:
      return mid+1
  return None

n, target = map(int, input().split())
array = list(map(int, input().split()))
print(binary_search(array, target, 0, n))