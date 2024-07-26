#실버5: https://www.acmicpc.net/problem/1439

s = input()
result_zero = 0
result_one = 0
check_zero = s.split("1")

for char in check_zero:
  if (char != ""):
    result_zero += 1
check_one = s.split("0")

for char in check_one:
  if (char != ""):
    result_one += 1
print(min(result_zero, result_one))

# for i in range(len(s)-1):
#   if s[i] != s[i+1]:
#     cnt += 1