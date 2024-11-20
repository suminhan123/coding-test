// https://school.programmers.co.kr/learn/courses/30/lessons/86971

const solution = (n, wires) => {
  let graph = Array.from({ length: n + 1 }, () => []);
  for (const wire of wires) {
    const [x, y] = wire;
    graph[x].push(y);
    graph[y].push(x);
  }

  let result = n;
  for (const wire of wires) {
    // 해당 간선 자르기
    const [x, y] = wire;
    const xIdx = graph[x].indexOf(y);
    graph[x].splice(xIdx, 1);
    const yIdx = graph[y].indexOf(x);
    graph[y].splice(yIdx, 1);

    // DFS 탐색
    let arr = [];
    let visited = Array.from({ length: n + 1 }, () => false);
    dfs(x, arr, visited);
    xLen = arr.length;
    arr = [];
    dfs(y, arr, visited);
    yLen = arr.length;

    // 최솟값으로 result 업데이트
    result = Math.min(result, Math.abs(xLen - yLen));

    // 다시 원래 상태로 복원
    graph[x].splice(xIdx, 0, y);
    graph[y].splice(yIdx, 0, x);
  }

  function dfs(start, arr, visited) {
    visited[start] = true;
    arr.push(start);
    for (const v of graph[start]) {
      if (!visited[v]) {
        dfs(v, arr, visited);
      }
    }
  }
  return result;
};
const n = 7;
const wires = [
  [1, 2],
  [2, 7],
  [3, 7],
  [3, 4],
  [4, 5],
  [6, 7],
];
console.log(solution(n, wires));
