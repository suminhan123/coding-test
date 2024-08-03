// https://school.programmers.co.kr/learn/courses/30/lessons/178870

const sequence = [2, 2, 2, 2, 2];
const k = 6;

const solution = (sequence, k) => {
  let result = [];
  let sum = 0;
  let lidx = 0;
  let ridx = -1;

  while (true) {
    if (sum < k) {
      ridx += 1;
      if (ridx >= sequence.length) {
        break;
      }
      sum += sequence[ridx];
    } else {
      sum -= sequence[lidx];
      if (lidx >= sequence.length) {
        break;
      }
      lidx += 1;
    }

    if (sum === k) {
      result.push([lidx, ridx]);
    }
  }

  const arr = result.sort(([x1, y1], [x2, y2]) => {
    const sub1 = y1 - x1;
    const sub2 = y2 - x2;

    if (sub1 !== sub2) {
      return sub1 - sub2;
    } else {
      return x1 - x2;
    }
  });

  return arr[0];
};
console.log(solution(sequence, k));
