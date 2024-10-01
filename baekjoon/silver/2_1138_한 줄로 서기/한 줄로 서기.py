# https://www.acmicpc.net/problem/1138
# 자기보다 큰 사람이 왼쪽에 몇 명있는 지 기억

n = int(input())
arr = list(map(int, input().split(" ")))

def get_permutations (arr, n):
  result = []
  visited = [0 for _ in range(len(arr))]
  def permutations (temp, visited):
    if len(temp) == n:
      result.append(temp[:])
      return
    for i in range(len(arr)):
      if not visited[i]:
        temp.append(arr[i])
        visited[i] = 1
        permutations(temp, visited)
        temp.pop()
        visited[i] = 0
  permutations([], visited)
  return result

person = list(map(lambda x: x+1, range(n)))

def left_taller_person (arr, idx):
  result = 0
  for i in range(idx):
    if arr[i] > arr[idx]:
      result += 1
  return result

for perm in get_permutations(person, n):
  cnt = 0
  for i in range(n):
    idx = perm.index(i+1)
    if arr[i] != left_taller_person(perm, idx):
      break
    else:
      cnt += 1
  if cnt == n:
    result = perm
    break


print(result)
