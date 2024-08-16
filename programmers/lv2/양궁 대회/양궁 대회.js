// https://school.programmers.co.kr/learn/courses/30/lessons/92342

// 라이언이 이기면 어피치랑 점수 차를 return
// 라이언이 지거나 비기면 -1 return
const getWhoWinWithDiff = (ryan, apeach) => {
  let ryanSum = 0;
  let apeachSum = 0;
  for (let i = 0; i < ryan.length; i++) {
    if (ryan[i] === apeach[i] && ryan[i] !== 0) {
      apeachSum += 10 - i;
    } else if (ryan[i] > apeach[i]) {
      ryanSum += 10 - i;
    } else if (ryan[i] < apeach[i]) {
      apeachSum += 10 - i;
    }
  }
  if (ryanSum > apeachSum) {
    return ryanSum - apeachSum;
  } else {
    return -1;
  }
};
const solution = (n, info) => {
  let q = [];
  let result = [];
  let maxDiff = -1;
  q.push([n, 0, Array(11).fill(0)]);
  while (q.length) {
    const [leftArrow, idx, ryanInfo] = q.shift();
    // 남은 화살이 없는 경우
    if (leftArrow === 0) {
      if (getWhoWinWithDiff(ryanInfo, info) > maxDiff) {
        maxDiff = getWhoWinWithDiff(ryanInfo, info);
        result = ryanInfo;
      } else if (getWhoWinWithDiff(ryanInfo, info) === maxDiff) {
        let isNewPossible = false;
        for (let i = 10; i >= 0; i--) {
          if (ryanInfo[i] > result[i]) {
            isNewPossible = true;
            break;
          }
        }
        result = isNewPossible && ryanInfo;
      }
    } // 마지막 쏘는 데 화살이 남은 경우
    else if (idx === 10) {
      let lastArray = [...ryanInfo];
      lastArray[10] = leftArrow;
      if (getWhoWinWithDiff(lastArray, info) > maxDiff) {
        maxDiff = getWhoWinWithDiff(lastArray, info);
        result = lastArray;
      } else if (getWhoWinWithDiff(ryanInfo, info) === maxDiff) {
        let isNewPossible = false;
        for (let i = 10; i >= 0; i--) {
          if (lastArray[i] > result[i]) {
            isNewPossible = true;
            break;
          }
        }
        result = isNewPossible && lastArray;
      }
    } else {
      // 라이언이 아예 안쏘는 경우
      q.push([leftArrow, idx + 1, ryanInfo]);
      // 라이언이 화살 쏘는 경우
      if (info[idx] + 1 <= leftArrow) {
        let array = [...ryanInfo];
        array[idx] = info[idx] + 1;
        q.push([leftArrow - (info[idx] + 1), idx + 1, array]);
      }
    }
  }
  return result ? result : [-1];
};
const info = [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3];
const n = 10;
console.log(solution(n, info));
