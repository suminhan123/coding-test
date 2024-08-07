const solution = (land) => {
  const n = land.length;
  const m = land[0].length;
  let result = Array(m).fill(0);

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const bfs = (i, j) => {
    let q = [];
    q.push([i, j]);
    land[i][j] = 0;

    let minY = j;
    let maxY = j;
    let oil = 0;

    while (q.length) {
      const [x, y] = q.shift();

      minY = Math.min(minY, y);
      maxY = Math.max(maxY, y);
      oil += 1;

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
          if (land[nx][ny] === 1) {
            q.push([nx, ny]);
            land[nx][ny] = 0;
          }
        }
      }
    }

    for (let i = minY; i < maxY + 1; i++) {
      result[i] += oil;
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (land[i][j] === 1) {
        bfs(i, j);
      }
    }
  }

  return Math.max(...result);
};
const land = [
  [1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0],
  [1, 1, 0, 0, 0, 1, 1, 0],
  [1, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 1, 1],
];
console.log(solution(land));
