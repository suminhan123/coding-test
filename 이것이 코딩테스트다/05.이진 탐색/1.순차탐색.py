input_data = input().split()
n = int(input_data[0])
target = input_data[1]

array = input().split()

def sequential_search(n, target, array):
  for i in range(n):
    if array[i] == target:
      return i+1
    
print(sequential_search(n, target, array))