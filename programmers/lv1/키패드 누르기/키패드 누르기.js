// https://school.programmers.co.kr/learn/courses/30/lessons/67256

const solution_1 = (numbers, hand) => {
  let leftH = [3, 0];
  let rightH = [3, 2];

  let result = "";

  for (const number of numbers) {
    let nx = Math.floor((number - 1) / 3);
    let ny = (number + 2) % 3;
    if (number === 0) {
      nx = 3;
      ny = 1;
    }

    // 무조건 왼손을 쓰는 경우
    if ([1, 4, 7].includes(number)) {
      leftH = [nx, ny];
      result += "L";
    }
    // 무조건 오른손을 쓰는 경우
    else if ([3, 6, 9].includes(number)) {
      rightH = [nx, ny];
      result += "R";
    } else {
      const [lx, ly] = leftH;
      const [rx, ry] = rightH;
      const lCount = Math.abs(nx - lx) + Math.abs(ny - ly);
      const rCount = Math.abs(nx - rx) + Math.abs(ny - ry);

      if (lCount === rCount) {
        if (hand === "right") {
          result += "R";
          rightH = [nx, ny];
        } else {
          result += "L";
          leftH = [nx, ny];
        }
      } else {
        if (lCount < rCount) {
          result += "L";
          leftH = [nx, ny];
        } else {
          result += "R";
          rightH = [nx, ny];
        }
      }
    }
  }
  return result;
};

// 또 다른 방법
const solution = (numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], hand) => {
  let h = { L: [3, 0], R: [3, 2] };
  const result = numbers
    .map((number) => {
      let nx = Math.floor((number - 1) / 3);
      let ny = (number + 2) % 3;
      if (number === 0) {
        nx = 3;
        ny = 1;
      }

      if ([1, 4, 7].includes(number)) {
        h.L = [nx, ny];
        return "L";
      } else if ([3, 6, 9].includes(number)) {
        h.R = [nx, ny];
        return "R";
      } else {
        const [lx, ly] = h.L;
        const [rx, ry] = h.R;
        const lCount = Math.abs(nx - lx) + Math.abs(ny - ly);
        const rCount = Math.abs(nx - rx) + Math.abs(ny - ry);

        if (lCount === rCount) {
          if (hand === "right") {
            return "R";
          } else {
            h.L = [nx, ny];
            return "L";
          }
        } else {
          if (lCount < rCount) {
            h.L = [nx, ny];
            return "L";
          } else {
            h.R = [nx, ny];
            return "R";
          }
        }
      }
    })
    .join("");

  return result;
};

const numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
const hand = "left"; //"LRLLRRLLLRR"
console.log(solution(numbers, hand));
