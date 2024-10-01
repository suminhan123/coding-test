# https://www.acmicpc.net/problem/1058
n = int(input())
friends=[]
for _ in range(n):
  friends.append(list(input()))

connected = [[0]*n for _ in range(n)]


for k in range(n):
  for i in range(n):
    for j in range(n):
      if i == j:
        continue
      if friends[i][j] == "Y" or (friends[i][k] == "Y" and friends[k][j] == "Y"):
        connected[i][j] = 1

result = 0

for row in connected:
  result = max(result, sum(row))
print(result)