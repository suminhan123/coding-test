# https://school.programmers.co.kr/learn/courses/30/lessons/17681


# 9가 인자로 오면 [0, 1, 0,0,1]이 return 되게
def binaryMaker (num, n):
  binary = format(num, 'b')
  if len(binary) == n:
    return binary
  else:
    temp = n - len(binary)
    for _ in range(temp):
      binary = "0" + binary
    return binary


def solution(n, arr1, arr2):
  barr1 = []
  barr2 = []
  result = []
  for i in range(n):
    barr1.append(binaryMaker(arr1[i], n))
    barr2.append(binaryMaker(arr2[i], n))
  for i in range(n):
    str = ''
    for j in range(n):
      if barr1[i][j] == "1" or barr2[i][j] == "1":
        str += "#"
      else:
        str += " "
    result.append(str)
    str = ''
  return result
  

n = 5
arr1 = [9, 20, 28, 18, 11]
arr2 = [30, 1, 21, 17, 28]


# 좋은 풀이
def solution(n, arr1, arr2):
    answer = []
    for i,j in zip(arr1,arr2):
        print(str(bin(i|j)))
        a12 = str(bin(i|j)[2:])
        a12=a12.rjust(n,'0')
        a12=a12.replace('1','#')
        a12=a12.replace('0',' ')
        answer.append(a12)
    return answer
solution(n,arr1,arr2)