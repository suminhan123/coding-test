// https://school.programmers.co.kr/learn/courses/30/lessons/131127
// 일정한 금액을 지불하면 10일동안 회원 자격
// 매일 한 가지 제품을 할인, 하루에 하나씩 구매 가능
// ex)
// 바나나 3개, 사과 2개, 쌀 2개, 돼지고기 2개, 냄비 1개
// 14일간 회원을 대상으로 할인
// 치,사,사,바,쌀,사,돼,바,돼,쌀,냄,바,사,바
// => 3, 4, 5 날 가능 => 총 3일

function solution(want, number, discount) {
  let result = 0;
  for (let i = 0; i <= discount.length - 10; i++) {
    let isPossible = true;
    console.log("경우", discount.slice(i, i + 10));
    for (let j = 0; j < want.length; j++) {
      const count = discount
        .slice(i, i + 10)
        .reduce((acc, value) => acc + (value === want[j] ? 1 : 0), 0);
      console.log(want[j], "의 개수", count);
      if (count !== number[j]) {
        isPossible = false;
        break;
      }
    }
    if (isPossible) {
      result++;
    }
  }
  return result;
}
const want = ["banana", "apple", "rice", "pork", "pot"];
const number = [3, 2, 2, 2, 1];
const discount = [
  "chicken",
  "apple",
  "apple",
  "banana",
  "rice",
  "apple",
  "pork",
  "banana",
  "pork",
  "rice",
  "pot",
  "banana",
  "apple",
  "banana",
];
