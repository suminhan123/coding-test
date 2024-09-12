// https://school.programmers.co.kr/learn/courses/30/lessons/133502
// 햄버거를 포장하는 일을 수행
// 빵 야채 고기 빵 순서로만 오직 햄버거 포장
// 1: 빵 2: 야채 3: 고기

const solution = (ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1]) => {
  let ingreStr = ingredient.join("");
  let result = 0;
  while (true) {
    if (ingreStr.includes("1231")) {
      ingreStr = ingreStr.replace("1231", "");
      result += 1;
    } else {
      return result;
    }
  }
};
const ingredient = [2, 1, 1, 2, 3, 1, 2, 3, 1];
console.log(solution(ingredient));
