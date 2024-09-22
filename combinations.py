def get_combi (arr,n):
  result = []

  def combi (element, idx):
    if (len(element) == n):
      result.append(element[:])
      return
    for i in range(idx, len(arr)):
      element.append(arr[i])
      combi(element, i+1)
      element.pop()

  combi([], 0)


  return result

print(get_combi([[1,2],[3,4],[5,6]], 2))