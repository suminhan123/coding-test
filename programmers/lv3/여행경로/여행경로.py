# DFS 백트래킹
tickets = [["ICN","A"], ["A","C"], ["C","A"], ["A","B"], ["B","D"]]

def solution (tickets):
  graph = {}
  visited = {}

  for start, end in tickets:
    if start in graph:
      graph[start].append(end)
    else:
      graph[start] = [end]
    if start + "-" + end in visited:
      visited[start + "-" + end] += 1
    else:
      visited[start + "-" + end] = 1

  for key in graph:
      graph[key].sort()

  N = len(tickets) + 1
  answer = ["ICN"]

  def search(start):
      if len(answer) == N:
          return list(answer)

      if start in graph:
          for node in graph[start]:
              edge = start + "-" + node
              if visited.get(edge, 0) > 0:
                  visited[edge] -= 1
                  answer.append(node)
                  res = search(node)
                  if res:
                      return res
                  answer.pop()
                  visited[edge] += 1
      return None

  return search("ICN")


print(solution(tickets))