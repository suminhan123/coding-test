# https://www.acmicpc.net/problem/2212
# 고속도로 위에 최대 K개의 집중국을 세울 수 있다

n = int(input())
k = int(input())
node = list(map(int, input().split()))
if k >= n:
  print(0)
  exit()

node.sort()
difs = []
for i in range(len(node) - 1):
  dif = abs(node[i] - node[i+1])
  difs.append(dif)
difs.sort()

for _ in range(k-1):
  difs.pop()


print(sum(difs))