// https://school.programmers.co.kr/learn/courses/30/lessons/142085
// 보유한 n명으로 연속되는 적의 공격을 마는 게임
// 무적권 스킬 : 병사의 소목 없이 한 라운드의 공격을 막을 수 있다
// 해당 스킬은 최대 k번 사용 가능
// 최대한 많은 라운드를 진행하고 싶다
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

    while (curIdx > 1 && this.heap[parIdx] > this.heap[curIdx]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0;
    }
  }

  pop() {
    const min = this.heap[0];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rightIdx]) {
      if (this.heap[leftIdx] < this.heap[curIdx]) {
        this.swap(leftIdx, curIdx);
      }
      return min;
    }

    while (
      this.heap[leftIdx] < this.heap[curIdx] ||
      this.heap[rightIdx] < this.heap[curIdx]
    ) {
      const minIdx =
        this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx;
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }

    return min;
  }
}
const solution = (n, k, enemy = [4, 2, 4, 5, 3, 3, 1]) => {
  let hp = new MinHeap();
  let result = 0;
  for (let i = 0; i < enemy.length; i++) {
    // 처음에 힙을 무적권 스킬 개수 만큼 채우기
    if (hp.size() < k) {
      hp.push(enemy[i]);
      result++;
    } else {
      let min = hp.getMin();

      // 힙 안의 최소값보다 큰 경우
      if (enemy[i] > min) {
        n -= min;
        hp.pop();
        hp.push(enemy[i]);
      } else {
        n -= enemy[i];
      }
      n >= 0 && result++;
    }
  }
  return result;
};
const n = 7;
const k = 3;
const enemy = [4, 2, 4, 5, 3, 3, 1];
// 1,3,5 : 무적권 2, 4 : 7명 => result 는 5번
console.log(solution(n, k, enemy));
