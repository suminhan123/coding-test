# 실버 1 : https://www.acmicpc.net/problem/1080


n, m = map(int, input().split()) 
A = []
for _ in range(n):
    A.append(list(map(int, list(input()))))
B = []
for _ in range(n): # 리스트B 선언
    B.append(list(map(int, list(input()))))


result = 0



# (i, j)에서부터 3까지 거리만큼만 0->1, 1->0 으로 바꾸기
def transitionMatrix(i, j):
  for x in range(i, i+3):
    for y in range(j, j+3):
      if A[x][y] == 0:
        A[x][y] = 1
      else:
        A[x][y] = 0

if (n < 3 or m < 3) and A != B:
    result = -1
else:
  for i in range(n-2):
    for j in range(m-2):
      if A[i][j] != B[i][j]:
        result += 1
        transitionMatrix(i, j)
        
if result != -1:
  if A != B:
    result = -1
print(result)