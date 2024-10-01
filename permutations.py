def get_perm (arr, n):
  result = []
  visited = [0 for _ in range(len(arr))]
  def permutation (temp, visited):
    if len(temp) == n:
      result.append(temp[:])
      return
    for i in range(len(arr)):
      if not visited[i]:
        temp.append(arr[i])
        visited[i] = 1
        permutation(temp, visited)
        temp.pop()
        visited[i] = 0

  
  permutation([], visited)
  return result

print(get_perm([[1,2],[3,4],[5,6], [7,8]], 2))