// https://school.programmers.co.kr/learn/courses/30/lessons/159994
// 영어 단어가 적힌 카드 뭉치 두 개로 선물
// 카드 2개 카드 순서대로의 조합으로 원하는 배열이 나올 수 있다면 yes 아니면 no를 반환

const solution = (cards1, cards2, goal) => {
  let cnt = 0;

  for (let i = 0; i < goal.length; i++) {
    const item = goal[i];

    if (cards1[0] === item) {
      cards1.shift();
      cnt++;
    } else if (cards2[0] === item) {
      cards2.shift();
      cnt++;
    } else {
      return "No";
    }
  }
  cnt === goal.length ? "Yes" : "No";
};
const cards1 = [];
const cards2 = ["want", "to"];
const goal = ["i"];

console.log(solution(cards1, cards2, goal));
