# https://www.acmicpc.net/problem/25195
import sys
sys.setrecursionlimit(10 ** 6)
input = sys.stdin.readline

n, m = map(int, input().split())
graph = [[] for _ in range(n+1)]
for _ in range(m):
  a, b = map(int, input().split())
  graph[a].append(b)
ans = [1]
result = True

s = int(input())
fans = list(map(int, input().split()))

def search (start):
  global result
  if len(graph[start]) == 0:
    temp = False
    for item in ans:
      if item in fans:
        temp = True 
    result = temp
    # print(" ".join(map(str, ans)), temp)
    return
  if not result:
    return
  
  for i in graph[start]:
    ans.append(i)
    if not result:
      return
    search(i)
    ans.pop()
    if not result:
      return

  
search(1)

if result:
  print("Yes")
else:
  print("yes")