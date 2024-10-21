const texts = [
  [4, 6],
  [19, 15, 10, 17],
];

const [n, m] = texts.shift();
const data = texts.pop();

let start = 0;
let end = Math.max(...data);

while (start <= end) {
  let mid = Math.floor((start + end) / 2);

  let total = 0;
  for (const d of data) {
    if (d > mid) {
      total += d - mid;
    }
  }

  if (total < m) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}
console.log(result);
