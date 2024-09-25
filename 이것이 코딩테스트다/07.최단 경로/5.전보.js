class MinHeap {
  constructor() {
    this.heap = [null];
  }

  size() {
    return this.heap.length - 1;
  }

  getMin() {
    return this.heap[1] ? this.heap[1] : null;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = (curIdx / 2) >> 0;

    while (curIdx > 1 && this.heap[parIdx][0] > this.heap[curIdx][0]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0;
    }
  }

  pop() {
    const min = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else {
      this.heap[1] = this.heap.pop();

      let curIdx = 1;
      let leftIdx = curIdx * 2;
      let rightIdx = curIdx * 2 + 1;

      while (
        (this.heap[leftIdx] && this.heap[leftIdx][0] < this.heap[curIdx][0]) ||
        (this.heap[rightIdx] && this.heap[rightIdx][0] < this.heap[curIdx][0])
      ) {
        const minIdx =
          !this.heap[rightIdx] || this.heap[leftIdx][0] < this.heap[rightIdx][0]
            ? leftIdx
            : rightIdx;

        this.swap(minIdx, curIdx);
        curIdx = minIdx;
        leftIdx = curIdx * 2;
        rightIdx = curIdx * 2 + 1;
      }
    }

    return min;
  }
}

const INF = Number(Infinity);
const texts = [
  [3, 2, 1],
  [1, 2, 4],
  [1, 3, 2],
];
const [n, m, start] = texts.shift();
let graph = Array.from({ length: n + 1 }, () => []);
let distance = Array(n + 1).fill(INF);

for (const [a, b, c] of texts) {
  graph[a].push([b, c]);
}

const dijkstra = (start) => {
  distance[start] = 0;
  const hp = new MinHeap();
  hp.push([0, start]);

  while (hp.size() > 0) {
    const [dist, cur] = hp.pop();

    if (dist > distance[cur]) {
      continue;
    }

    for (const i of graph[cur]) {
      const cost = dist + i[1];
      if (cost < distance[i[0]]) {
        distance[i[0]] = cost;
        hp.push([cost, i[0]]);
      }
    }
  }
};
dijkstra(start);

let cnt = 0;
let time = 0;

for (let i = 1; i < n + 1; i++) {
  if (i !== start && distance[i] < INF) {
    cnt += 1;
    time = Math.max(time, distance[i]);
  }
}
console.log(cnt, time);
