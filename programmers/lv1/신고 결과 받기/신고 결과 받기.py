id_list = ["con", "ryan"]
report = ["ryan con", "ryan con", "ryan con", "ryan con"]
k = 2

def solution (id_list, report, k):
  array = [[0 for _ in range(len(id_list))] for _ in range(len(id_list))]
  for r in report:
    f, t = r.split(" ")
    fromIdx = id_list.index(f)
    toIdx = id_list.index(t)
    array[fromIdx][toIdx] = 1
  result = []
  for i in range(len(id_list)):
    temp = 0
    for j in range(len(id_list)):
      if array[i][j] == 1:
        count = sum(row[j] == 1 for row in array)
      
        if count >= k:
          temp += 1
    result.append(temp)
  return result
      