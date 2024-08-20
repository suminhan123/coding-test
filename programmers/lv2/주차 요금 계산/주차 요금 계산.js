// https://school.programmers.co.kr/learn/courses/30/lessons/92341

const getTimeDiff = (start, end = "23:59") => {
  let result = 0;
  const [sh, sm] = start.split(":").map((value) => parseInt(value));
  let [eh, em] = end.split(":").map((value) => parseInt(value));
  if (sm <= em) {
    result += em - sm + (eh - sh) * 60;
  } else {
    eh -= 1;
    em += 60;
    result += em - sm + (eh - sh) * 60;
  }

  return result;
};

const getTotalTimeDiff = (arr) => {
  let result = 0;
  for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
    if (arr[i * 2 + 1]) {
      result += getTimeDiff(arr[i * 2], arr[i * 2 + 1]);
    } else {
      result += getTimeDiff(arr[i * 2]);
    }
  }
  return result;
};

const getCarCash = (time, fees) => {
  if (time <= fees[0]) {
    return fees[1];
  } else {
    return fees[1] + Math.ceil((time - fees[0]) / fees[2]) * fees[3];
  }
};

const solution = (fees, records) => {
  object = {};
  let result = [];
  records.forEach((record) => {
    const [time, num, _] = record.split(" ");
    const carNum = parseInt(num);
    if (object[carNum]) {
      object[carNum].push(time);
    } else {
      object[carNum] = [time];
    }
  });
  for (const key in object) {
    const time = getTotalTimeDiff(object[key]);
    result.push([key, getCarCash(time, fees)]);
  }

  return result
    .sort((a, b) => a[0] - b[0])
    .map((value) => {
      return value[1];
    });
};
// [기본시간, 기본요금, 단위 시간, 단위 요금]
const fees = [180, 5000, 10, 600];
const records = [
  "05:34 5961 IN",
  "06:00 0000 IN",
  "06:34 0000 OUT",
  "07:59 5961 OUT",
  "07:59 0148 IN",
  "18:59 0000 IN",
  "19:09 0148 OUT",
  "22:59 5961 IN",
  "23:00 5961 OUT",
];

console.log(solution(fees, records));
