def binary_search (array, target, start, end):
  while start <= end:
    mid = (start + end) // 2

    if target == array[mid]:
      return mid
    elif target < array[mid]:
      end = mid- 1
    else:
      start = mid+ 1
  return None

n = int(input())
data = list(map(int, input().split()))
data.sort()
m = int(input())
check = list(map(int, input().split()))

for c in check:
  if binary_search(data, c, 0, n) == None:
    print("no", end=" ")
  else:
    print("yes", end= " ")
