const texts = [
  5,
  "Dongbin",
  ["Hanul", "Jonggu", "Dongbin", "Taeil", "Sangwook"],
];

const n = texts.shift();
const target = texts.shift();
const array = texts.pop();

const sequentialSearch = (n, target, array) => {
  for (let i = 0; i < n; i++) {
    if (array[i] === target) {
      return i + 1;
    }
  }
};

console.log(sequentialSearch(n, target, array));
