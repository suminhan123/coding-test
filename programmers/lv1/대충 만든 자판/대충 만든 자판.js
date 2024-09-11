// https://school.programmers.co.kr/learn/courses/30/lessons/160586
// 하나의 키에 여러 개의 문자가 할당
// 한번 "A", 두번 "B", 세번 "C"
// 특정 문자열을 작성할 때 키를 최소 몇 번을 눌러야 작성할 수 있는 지

const solution = (keymap, targets) => {
  const keyobj = {};

  for (const key of keymap) {
    let count = 0;
    for (const k of key.split("")) {
      count += 1;

      if (keyobj[k] && keyobj[k] > count) {
        keyobj[k] = count;
      }
      if (!keyobj[k]) {
        keyobj[k] = count;
      }
    }
  }

  return targets.map((target) => {
    let cnt = 0;
    for (const t of target.split("")) {
      if (!keyobj[t]) {
        return -1;
      } else {
        cnt += keyobj[t];
      }
    }
    return cnt;
  });
};
const keymap = ["AA"];
const targets = ["B"];

console.log(solution(keymap, targets));

// 좋은 풀이
const answer = [];
const map = {};

for (const items of keymap) {
  items
    .split("")
    .map(
      (item, index) =>
        (map[item] = map[item] < index + 1 ? map[item] : index + 1)
    );
}

for (const items of targets) {
  answer.push(
    items.split("").reduce((cur, item) => (cur += map[item]), 0) || -1
  );
}

console.log(answer);
