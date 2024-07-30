// https://school.programmers.co.kr/learn/courses/30/lessons/258712

function solution(friends, gifts) {
  let result = Array(friends.length).fill(0);
  let giftTable = Array.from({ length: friends.length }, () => [[], []]);

  // giftTable 알맞게 초기화 작업
  for (const gift of gifts) {
    const [a, b] = gift.split(" ");
    // 선물을 준 친구 index
    const aidx = friends.indexOf(a);
    // 선물을 받은 친구 index
    const bidx = friends.indexOf(b);

    giftTable[aidx][0].push(b);
    giftTable[bidx][1].push(a);
  }

  for (let aidx = 0; aidx < friends.length; aidx++) {
    for (let bidx = aidx; bidx < friends.length; bidx++) {
      if (aidx === bidx) {
        continue;
      }
      const avalue = friends[aidx];
      const bvalue = friends[bidx];
      // a 가 b에게 준 선물 개수
      const aToBPresent = giftTable[aidx][0].filter(
        (value) => value === bvalue
      ).length;
      // b 가 a에게 준 선물 개수
      const bToAPresent = giftTable[bidx][0].filter(
        (value) => value === avalue
      ).length;

      if (aToBPresent < bToAPresent) {
        result[bidx] += 1;
      } else if (bToAPresent < aToBPresent) {
        result[aidx] += 1;
      } else {
        // 선물 지수 비교
        const aPresentNum =
          giftTable[aidx][0].length - giftTable[aidx][1].length;
        const bPresentNum =
          giftTable[bidx][0].length - giftTable[bidx][1].length;

        if (aPresentNum < bPresentNum) {
          result[bidx] += 1;
        } else if (bPresentNum < aPresentNum) {
          result[aidx] += 1;
        }
      }
    }
  }

  return Math.max(...result);
}
