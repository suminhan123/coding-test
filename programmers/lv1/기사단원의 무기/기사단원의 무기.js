// https://school.programmers.co.kr/learn/courses/30/lessons/136798
// 각 기사에게 1번 부터 number 까지 번호가 지정 -> 무기점에서 무기를 구매(번호의 약수 개수가 공격력)
// 협약기관에서 정한 공격력 최솟값을 가져야함

const getDivisorCnt = (num) => {
  let cnt = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) cnt += 1;
  }
  return cnt;
};

const solution = (number, limit, power) => {
  let result = 0;
  for (let i = 1; i <= number; i++) {
    result += getDivisorCnt(i) > limit ? power : getDivisorCnt(i);
  }
  return result;
};
const number = 10; // [1,2,3,4,5] -> [1,2,2,3,2]
const limit = 3;
const power = 2;

console.log(solution(number, limit, power));
