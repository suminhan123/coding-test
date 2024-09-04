// https://school.programmers.co.kr/learn/courses/30/lessons/161990
// 바탕화면에 저장해둔 파일들을 전부 삭제
// 빈칸 . 파일이 있는 칸 #
// 최소한의 이동거리를 갖는 한번의 드래그로 모든 파일을 선택해 한 번에 지우려고 할 때
// S가 드래그의 시작점, E가 드래그의 끝점 =>
// 드래그한 거리 |E의 x 좌표 - S의 x좌표| + |E의 y 좌표 - S의 y좌표|

const solution = (wallpaper) => {
  let sx = wallpaper.length;
  let sy = wallpaper[0].length;
  let ex = 0;
  let ey = 0;

  const wallGraph = wallpaper.map((value) => [...value]);

  for (let i = 0; i < wallpaper.length; i++) {
    const jArr = wallGraph[i]
      .map((value, index) => {
        if (value === "#") {
          return index;
        }
      })
      .filter((value) => value !== undefined);
    if (jArr.length === 0) {
      continue;
    }
    const minj = Math.min(...jArr);
    const maxj = Math.max(...jArr);
    (sx = Math.min(sx, i)), (sy = Math.min(minj, sy));
    (ex = Math.max(i + 1, ex)), (ey = Math.max(maxj + 1, ey));
  }

  return [sx, sy, ex, ey];
};
const wallpaper = [".#...", "..#..", "...#."];
console.log(solution(wallpaper));

// 좋은 풀이
let [x1, y1, x2, y2] = [wallpaper.length, wallpaper[0].length, 0, 0];
wallpaper.forEach((value, i) => {
  if (value.includes("#")) {
    x1 = Math.min(x1, i);
    y1 = Math.min(y1, value.indexOf("#"));
    x2 = Math.max(x2, i);
    y2 = Math.max(y2, value.lastIndexOf("#"));
  }
});
