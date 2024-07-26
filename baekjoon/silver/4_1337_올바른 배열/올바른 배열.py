#실버4: https://www.acmicpc.net/problem/1337

import sys

input = sys.stdin.readline

t = int(input())
number = [int(input()) for _ in range(t)]
number.sort()

minVal = 4

for i in range(len(number) - 1):
  temp = 0
  for j in range(number[i], number[i] + 5):
    if j not in number:
      temp +=1
  if temp < minVal:
    minVal = temp

print(minVal)