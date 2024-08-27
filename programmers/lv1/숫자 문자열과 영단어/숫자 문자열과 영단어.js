// https://school.programmers.co.kr/learn/courses/30/lessons/81301
// 네오가 숫자를 건넬 때 일부 자릿수를 영단어로 바꾸면 원래 숫자를 찾는 게임
// 1478 → "one4seveneight"
// 원래 숫자를 return 하는 함수

const solution = (s) => {
  let result = "";

  const object = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  let temp = 0;
  const ObjectStrKey = Object.keys(object);
  const ObjectNumValue = Object.values(object);

  for (let i = 0; i < s.length; i++) {
    const strSlice = s.slice(temp, i + 1);
    if (ObjectStrKey.includes(strSlice)) {
      temp = i + 1;
      result += object[strSlice];
    } else if (ObjectNumValue.includes(strSlice)) {
      temp = i + 1;
      result += strSlice;
    }
  }
  return parseInt(result);
};
const s = "23four5six7";
console.log(solution(s));

// 좋은 풀이
const goodSolution = (s = "23four5six7") => {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = "";

  for (let i = 0; i < numbers.length; i++) {
    let arr = s.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
};
