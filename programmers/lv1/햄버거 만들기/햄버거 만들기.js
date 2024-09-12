// https://school.programmers.co.kr/learn/courses/30/lessons/133502
// 햄버거를 포장하는 일을 수행
// 빵 야채 고기 빵 순서로만 오직 햄버거 포장
// 1: 빵 2: 야채 3: 고기

const solution = (ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1]) => {
  let arr = [];
  let result = 0;

  for (let i = 0; i < ingredient.length; i++) {
    arr.push(ingredient[i]);
    // arr.join("").includes("1231") => join 연산 후 탐색까지 수행하기에 시간 초과
    if (arr.length >= 4 && arr.slice(-4).join("") === "1231") {
      arr.splice(-4, 4);
      result += 1;
    }
  }
  return result;
};
const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];
console.log(solution(ingredient));

// 좋은 풀이
let count = 0;
for (let i = 0; i < ingredient.length; i++) {
  if (ingredient.slice(i, i + 4).join("") === "1231") {
    count++;
    ingredient.splice(i, 4);
    i -= 3;
  }
}
