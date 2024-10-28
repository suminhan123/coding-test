x, y = map(int, input().split())

def solution ():
  percent = (100 * y) // x
  if percent >= 99:
    return -1
  else:
    start = 0
    end = x
    result = x

    while start <= end:
      mid = (start + end) // 2

      new_percent = (100 * (y+mid)) // (x+mid)

      if new_percent > percent:
        end = mid - 1
        result = mid

      else:
        start = mid + 1
        
    return result


print(solution())