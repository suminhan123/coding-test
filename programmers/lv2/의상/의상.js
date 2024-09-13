// https://school.programmers.co.kr/learn/courses/30/lessons/42578

const solution = (clothes) => {
  let obj = {};

  for (const [clothe, wear] of clothes) {
    if (!obj[wear]) {
      obj[wear] = [];
    }
    obj[wear].push(clothe);
  }

  let result = 1;

  for (const o in obj) {
    result *= obj[o].length + 1;
  }
  return result - 1;
};
const clothes = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];
console.log(solution(clothes));

// 좋은 풀이
console.log(
  Object.values(
    clothes.reduce((obj, [_, wear]) => {
      obj[wear] = obj[wear] ? obj[wear] + 1 : 1;
      return obj;
    }, {})
  ).reduce((sum, value) => (sum *= value + 1), 1) - 1
);
