
computers = 	[[1, 1, 0], [1, 1, 1], [0, 1, 1]]
n = 3

def solution(n, computers):

  visited = [False] * n

  answer = 0

  def dfs (start):
    visited[start] = True
    for i in range(n):
      if start != i and computers[start][i] == 1 and not visited[i]:
        dfs(i)
  for i in range(n):
    if not visited[i]:
      dfs(i)
      answer += 1
  return answer
print(solution(n, computers))