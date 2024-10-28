x, y = map(int, input().split())

def solution ():
  result = 1
  percent = int((y / x) * 100)
  if x == y:
    print(-1)
  else:

    while True:
      new_percent = int(((y+result) / (x+result)) * 100)
      if new_percent != percent:
        break
      result += 1

    print(result)

solution()