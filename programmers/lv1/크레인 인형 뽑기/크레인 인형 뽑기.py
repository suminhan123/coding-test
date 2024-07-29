# https://school.programmers.co.kr/learn/courses/30/lessons/64061


basket = []

def checkRemoveBall():
  result = 0
  temp = False
  while True:
    for i in range(len(basket) - 1):
      if basket[i] == basket[i+1]:  
        del basket[i:i + 2]
        result += 1
        temp = True
        break
    if not temp:
      break
    else:
      temp = False
      continue
  return result * 2


def solution(board, moves):
  n = len(board)
  result = 0
  for move in moves:
    for i in range(n):
      if board[i][move - 1] != 0:
        basket.append(board[i][move -1])
        board[i][move-1] = 0
        result+= checkRemoveBall()
        break
  return result




# 좋은 풀이
def solution(board, moves):
    stacklist = []
    answer = 0

    for i in moves:
        for j in range(len(board)):
            if board[j][i-1] != 0:
                stacklist.append(board[j][i-1])
                board[j][i-1] = 0

                if len(stacklist) > 1:
                    if stacklist[-1] == stacklist[-2]:
                        stacklist.pop(-1)
                        stacklist.pop(-1)
                        answer += 2     
                break

    return answer


