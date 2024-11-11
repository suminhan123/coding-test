# https://www.acmicpc.net/problem/13417

t = int(input())

for _ in range(t):
  n = int(input())
  cards = list(input().split())
  str_card = cards[0]

  for i in range(1, len(cards)):
    if cards[i] <= str_card[0]:
      str_card = cards[i] + str_card
    else:
      str_card = str_card + cards[i]

    
  print(str_card)