def binary_search (array, target, start, end):
  if start > end:
    return None
  mid = (start + end) // 2
  if target < array[mid]:
    return binary_search(array, target, start, mid-1)
  elif target > array[mid]:
    return binary_search(array, target, mid+1, end)
  else:
    return mid+1

n, target = map(int, input().split())
array = list(map(int, input().split()))

print(binary_search(array, 0, 0, n))