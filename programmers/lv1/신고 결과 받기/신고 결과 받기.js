// https://school.programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
  let array = Array.from({ length: id_list.length }, () =>
    Array(id_list.length).fill(0)
  );
  for (const r of report) {
    const [from, to] = r.split(" ");
    const fromIdx = id_list.indexOf(from);
    const toIdx = id_list.indexOf(to);
    array[fromIdx][toIdx] = 1;
  }

  let result = [];

  for (let i = 0; i < id_list.length; i++) {
    temp = 0;
    for (let j = 0; j < id_list.length; j++) {
      if (array[i][j] === 1) {
        // 신고 당한 횟수가 k를 넘어가는 지 확인
        const count = array.reduce((acc, row) => {
          if (row[j] === 1) {
            acc += 1;
          }
          return acc;
        }, 0);
        if (count >= k) {
          temp += 1;
        }
      }
    }
    result.push(temp);
  }
  return result;
}

const id_list = ["con", "ryan"];
const report = ["ryan con", "ryan con", "ryan con", "ryan con"];
const k = 2;
console.log(solution(id_list, report, k));
