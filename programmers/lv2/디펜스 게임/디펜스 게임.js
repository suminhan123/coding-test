// https://school.programmers.co.kr/learn/courses/30/lessons/142085
// 보유한 n명으로 연속되는 적의 공격을 마는 게임
// 무적권 스킬 : 병사의 소목 없이 한 라운드의 공격을 막을 수 있다
// 해당 스킬은 최대 k번 사용 가능
// 최대한 많은 라운드를 진행하고 싶다!!

const solution = (n, k, enemy) => {
  let result = 0;
  // bfs로 완전 탐색
  let q = []; // 큐 : [현재 라운드, 무적권 개수, 남은 병사]
  // 첫 라운드에 무적권을 쓰는 경우
  if (k > 0) {
    q.push([1, k - 1, n]);
  }
  // 첫 라운드에 병사를 쓰는 경우
  if (enemy[0] <= n) {
    q.push([1, k, n - enemy[0]]);
  }
  while (q.length) {
    const [round, skill, remain] = q.shift();
    // console.log(round, "번째", skill, remain);
    if (k >= enemy.length) {
      result = enemy.length;
      break;
    }
    // 남은 병사가 없는 경우
    if (skill === 0 && enemy[round] > remain) {
      result = result < round ? round : result;
    } else {
      // 현재 라운드에 무적권을 쓰는 경우
      if (skill > 0) {
        q.push([round + 1, skill - 1, remain]);
      }

      // 병사를 쓰는 경우
      if (remain > enemy[round]) {
        q.push([round + 1, skill, remain - enemy[round]]);
      }
    }
  }

  return result;
};
const n = 7;
const k = 3;
const enemy = [4, 2, 4, 5, 3, 3, 1];
// 1,3,5 : 무적권 2, 4 : 7명 => result 는 5번
console.log(solution(n, k, enemy));
