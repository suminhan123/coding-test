// https://school.programmers.co.kr/learn/courses/30/lessons/176963
// 사진별로 추억 점수를 매기려고 한다
// 사진 속 인물의 그리움 점수를 합산한 값이 추억 점수

const solution = (names, yearning, photo) => {
  const object = {};

  for (let i = 0; i < names.length; i++) {
    object[names[i]] = yearning[i];
  }

  return photo.map((values) => {
    let cnt = 0;
    values.forEach((value) => {
      cnt += object[value] ? Number(object[value]) : 0;
    });
    return cnt;
  });
};

const names = ["kali", "mari", "don"];
const yearning = [11, 1, 55];

const photo = [
  ["kali", "mari", "don"],
  ["pony", "tom", "teddy"],
  ["con", "mona", "don"],
];
console.log(solution(names, yearning, photo));

// 좋은 풀이

const object = {};

for (let i = 0; i < names.length; i++) {
  object[names[i]] = yearning[i];
}

console.log(
  photo.map((value) =>
    value
      .map((v) => (object[v] ? object[v] : 0))
      .reduce((prev, cur) => (cur = cur + prev))
  )
);
