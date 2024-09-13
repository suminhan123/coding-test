// https://school.programmers.co.kr/learn/courses/30/lessons/135808
// 사과는 상태에 따라 1점부터 k점까지의 점수로 분류
// 한 상자에 m 사과를 담아 포장
// 가장 낮은 점수 p -> 상자 가격 : p * m
// 최대 이익

const solution = (k, m, score) => {
  let result = 0;
  score.sort((a, b) => b - a);
  for (let i = 0; i <= score.length - m; i += m) {
    result += score[i + m - 1] * m;
  }
  return result;
};
const k = 4; // 사과 최대 점수
const m = 3; // 한 상자에 들어가는 사과의 개수
const score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];

console.log(solution(k, m, score));

// 좋은 풀이
let answer = 0;
const sortedScore = score
  .slice()
  .sort((a, b) => a - b)
  .slice(score.length % m);
for (let i = 0; i < sortedScore.length; i += m) {
  answer += sortedScore[i] * m;
}
