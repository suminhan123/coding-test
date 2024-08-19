// https://school.programmers.co.kr/learn/courses/30/lessons/72412

const getInfoObject = (info) => {
  let object = {};
  info.forEach((value) => {
    const arr = value.split(" ");
    const score = parseInt(arr.pop());
    const key = arr.join("");
    if (object[key]) {
      object[key].push(score);
    } else {
      object[key] = [score];
    }
  });

  for (const key in object) {
    object[key].sort((a, b) => a - b);
  }

  return object;
};

const getQueryArr = (query) => {
  return query.map((value) => {
    return value
      .split(" and ")
      .map((v, i) => {
        if (i === 3) {
          return v.split(" ");
        }
        return v;
      })
      .flat()
      .filter((v) => v !== "-");
  });
};

const binarySearch = (infoScoreArr, queryScore) => {
  let left = 0;
  let right = infoScoreArr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (infoScoreArr[mid] < queryScore) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

const solution = (info, query) => {
  let result = [];
  const infos = getInfoObject(info);
  const infosKey = Object.keys(infos);
  const queries = getQueryArr(query); // info에 있는 지 확인

  queries.forEach((query) => {
    const score = parseInt(query.pop());
    const count = infosKey
      .filter((infoKey) => query.every((q) => infoKey.includes(q)))

      // infos[value]에 배열의 숫자가 score 숫자보다 작으면 빼야함
      .reduce(
        (acc, value) =>
          acc + infos[value].length - binarySearch(infos[value], score),
        0
      );

    result.push(count);
  });
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
