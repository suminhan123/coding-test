// https://school.programmers.co.kr/learn/courses/30/lessons/172928
// 지나다니는 길 O, 장애물 X
// 맵을 벗어나는 지 혹은 장애물을 만나는 지
// 어느거 하나라도 해당하면 무시하고 다음 명령 수행
// ex) [2,1]

const solution = (park, routes) => {
  const dx = {
    N: -1, // 북
    E: 0, // 동
    S: 1, // 남
    W: 0, // 서
  };
  const dy = {
    N: 0, // 북
    E: 1, // 동
    S: 0, // 남
    W: -1, // 서
  };

  let x = 0;
  let y = 0;
  const graph = park.map((p) => p.split(""));
  const w = graph[0].length;
  const h = graph.length;

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (graph[i][j] === "S") {
        x = i;
        y = j;
      }
    }
  }

  const getBlockPresent = (start, end, dir) => {
    let [x, y] = start;
    const [nx, ny] = end;
    while (true) {
      if (graph[x][y] === "X") {
        return false;
      }
      if (x === nx && y === ny) {
        return true;
      }
      x += dx[dir];
      y += dy[dir];
    }
  };

  while (routes.length > 0) {
    const [dir, block] = routes.shift().split(" ");

    let nx = x + dx[dir] * block;
    let ny = y + dy[dir] * block;

    if (nx >= 0 && ny >= 0 && nx < h && ny < w) {
      if (getBlockPresent([x, y], [nx, ny], dir)) {
        x = nx;
        y = ny;
      }
    }
  }

  return [x, y];
};

const park = ["SOO", "OXX", "OOO"];
let routes = ["E 2", "S 2", "W 1"];
console.log(solution(park, routes));

// 좋은 풀이
const n = park.length;
const m = park[0].length;
const map = park.map((x) => [...x]);
// [ [ 'S', 'O', 'O' ], [ 'O', 'X', 'X' ], [ 'O', 'O', 'O' ] ]
const dir = { E: [0, 1], S: [1, 0], W: [0, -1], N: [-1, 0] };
var i = map.findIndex((value) => value.includes("S"));
var j = map[i].findIndex((value) => value === "S");

const move = (route) => {
  let [r, s] = route.split(" ");
  let x = i;
  let y = j;
  for (let k = 0; k < Number(s); k++) {
    x += dir[r][0];
    y += dir[r][1];
    if (x < 0 || y < 0 || x >= n || y >= m || map[x][y] === "X") return [i, j];
  }
  return [x, y];
};
for (let route of routes) var [i, j] = move(route);
// [i, j]
