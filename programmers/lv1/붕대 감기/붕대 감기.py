# https://school.programmers.co.kr/learn/courses/30/lessons/250137

def isAttackTime(time, attacks):
  temp = False
  demage = 0
  for attack in attacks:
    if attack[0] == time:
      demage = attack[1]
      temp = True
    if time < attack[0]:
      break
  return [temp, demage]

def solution(bandage, health, attacks):
  time = 1 # 게임 진행 시간
  maxTime = attacks[-1][0] + 1 
  techtime, recover, plusrecover = bandage
  success = 0 # 연속 성공 횟수
  playHealth = health # 경기 중 체력

  while time != maxTime:
    isAttack, demage = isAttackTime(time, attacks)

    if isAttack:
      success = 0
      playHealth -= demage

      if playHealth <=0:
        return -1
    else:
      success += 1
      # 연속 붕대 감기 가능한 경우
      playHealth += recover
      if success == techtime:
        playHealth += plusrecover
        success = 0

      # 최대 체력이 넘어가는 경우
      if playHealth > health:
        playHealth = health
      
    time += 1
  return playHealth if playHealth > 0 else -1


attacks = 	[[1, 15], [5, 16], [8, 6]]
bandage = [4, 2, 7]
health = 20
print(solution(bandage, health, attacks))

# 좋은 풀이
def solution(bandage, health, attacks):
    hp = health
    start = 1
    # 굳이 시간 하나하나를 playHealth를 구할 필요 X
    # 공격 당할 때 이전 회복한 hp를 같이 구함
    for i, j in attacks:
        hp += ((i - start) // bandage[0]) * bandage[2] + (i - start) * bandage[1]
        start = i + 1
        if hp >= health:
            hp = health
        hp -= j
        if hp <= 0:
            return -1
    return hp