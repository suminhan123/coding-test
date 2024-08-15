# https://school.programmers.co.kr/learn/courses/30/lessons/67256
def solution(numbers, hand):
  h = {"L":[3, 0], "R": [3, 2]}

  result = ""
  for number in numbers:
    nx = (number - 1) // 3
    ny = (number + 2) % 3
    if number == 0:
      nx = 3
      ny = 1

    if number in [1,4, 7]:
      h["L"] = [nx, ny]
      result += "L"
    elif number in [3,6,9]:
      h["R"] = [nx, ny]
      result += "R"
    else:
      lx, ly = h["L"]
      rx, ry = h["R"]

      lCount = abs(nx-lx) + abs(ny-ly)
      rCount = abs(nx - rx) + abs(ny - ry)

      if lCount == rCount:
        if hand == "right":
          result += "R"
          h["R"] = [nx, ny]
        else:
          result += "L"
          h["L"] = [nx, ny]
      else:
        if lCount < rCount:
          result += "L"
          h["L"] = [nx, ny]
        else:
          result += "R"
          h["R"] = [nx, ny]
  return result
    
numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]
hand = "left"; #"LRLLRRLLLRR"
print(solution(numbers, hand))