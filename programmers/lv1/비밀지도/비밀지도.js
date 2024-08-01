// https://school.programmers.co.kr/learn/courses/30/lessons/17681

const binaryMaker = (num, n) => {
  let binary = "";
  binary = num.toString(2);
  if (binary.length === n) {
    return binary;
  } else {
    const temp = n - binary.length;
    for (let i = 0; i < temp; i++) {
      binary = "0" + binary;
    }
  }

  return binary;
};

const solution = (n, arr1, arr2) => {
  let barr1 = [];
  let barr2 = [];
  let result = [];

  for (let i = 0; i < n; i++) {
    barr1.push(binaryMaker(arr1[i], n));
    barr2.push(binaryMaker(arr2[i], n));
  }

  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      if (barr1[i][j] === "1" || barr2[i][j] === "1") {
        str += "#";
      } else {
        str += " ";
      }
    }
    result.push(str);
    str = "";
  }
  return result;
};
console.log(binaryMaker(1, 5));
