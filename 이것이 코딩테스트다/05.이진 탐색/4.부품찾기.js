const binarySearch = (array, target, start, end) => {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return Infinity;
};
const texts = [5, [8, 3, 7, 9, 2], 3, [5, 7, 9]];
const n = texts.shift();
const data = texts.shift();
data.sort((a, b) => a - b);
const m = texts.shift();
const check = texts.pop();

for (const c of check) {
  if (binarySearch(data, c, 0, n) === Infinity) {
    console.log("no");
  } else {
    console.log("yes");
  }
}
