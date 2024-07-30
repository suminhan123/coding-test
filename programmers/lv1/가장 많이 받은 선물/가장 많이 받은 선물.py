# https://school.programmers.co.kr/learn/courses/30/lessons/258712

def solution(friends, gifts):
  giftTable = [[[] for _ in range(2)] for _ in range(len(friends))]
  result = [0 for _ in range(len(friends))]

  for gift in gifts:
    a, b = gift.split(" ")
    aidx= friends.index(a)
    giftTable[aidx][0].append(b)

    bidx = friends.index(b)
    giftTable[bidx][1].append(a)
  
  for aidx,avalue in enumerate(friends):
    for bidx in range(aidx, len(friends)):
      bvalue = friends[bidx]
      if aidx == bidx:
        continue
      aForbGift = giftTable[aidx][0].count(bvalue)
      bForaGift = giftTable[bidx][0].count(avalue)

      if (aForbGift < bForaGift):
        result[bidx]+=1
      elif (bForaGift < aForbGift):
        result[aidx]+=1
      else:
        aPresentNum = len(giftTable[aidx][0]) - len(giftTable[aidx][1])
        bPresentNum = len(giftTable[bidx][0]) - len(giftTable[bidx][1])
        if (aPresentNum < bPresentNum):
          result[bidx]+=1
        elif (bPresentNum < aPresentNum):
          result[aidx]+=1

  return max(result)


# 좋은 풀이
def goodSolution(friends, gifts):
    # 친구 이름과 index 값 1대1 매칭
    f = {v: i for i, v in enumerate(friends)}
    # 친구의 수
    l = len(friends)
    # 선물 지수
    p = [0] * l
    answer = [0] * l
    gr = [[0] * l for _ in range(l)]
    for i in gifts:
        a, b = i.split()
        gr[f[a]][f[b]] += 1
    for i in range(l):
        p[i] = sum(gr[i]) - sum([k[i] for k in gr])

    for i in range(l):
        for j in range(l):
            if gr[i][j] > gr[j][i]:
                answer[i] += 1
            elif gr[i][j] == gr[j][i]:
                if p[i] > p[j]:
                    answer[i] += 1
    return max(answer)


