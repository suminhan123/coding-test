// https://school.programmers.co.kr/learn/courses/30/lessons/72412
const solution = (info, query) => {
  let result = [];
  const is = info.map((value) => {
    return value.split(" ");
  });
  const q = query.map((value) => {
    return value
      .split(" and ")
      .map((values, index) => {
        if (index === 3) {
          return values.split(" ");
        }
        return values;
      })
      .flat();
  });

  for (let i = 0; i < q.length; i++) {
    let count = 0;

    for (let j = 0; j < is.length; j++) {
      let isPass = true;

      for (let t = 0; t < 4; t++) {
        if (q[i][t] !== "-" && q[i][t] !== is[j][t]) {
          isPass = false;
          break;
        }
      }
      if (parseInt(is[j][4]) < parseInt(q[i][4])) {
        isPass = false;
      }
      if (isPass) {
        count += 1;
      }
    }

    result.push(count);
  }

  return result;
};
const info = [
  "java backend junior pizza 150",
  "python frontend senior chicken 210",
  "python frontend senior chicken 150",
  "cpp backend senior pizza 260",
  "java backend junior chicken 80",
  "python backend senior chicken 50",
];
const query = [
  "java and backend and junior and pizza 100",
  "python and frontend and senior and chicken 200",
  "cpp and - and senior and pizza 250",
  "- and backend and senior and - 150",
  "- and - and - and chicken 100",
  "- and - and - and - 150",
];
console.log(solution(info, query));
