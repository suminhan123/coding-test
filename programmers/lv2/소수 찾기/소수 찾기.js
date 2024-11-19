// https://school.programmers.co.kr/learn/courses/30/lessons/42839

const solution = (numbers) => {
  const num_arr = numbers.split("").map(Number);
  const n = num_arr.length;
  let ans = [];
  let result = 0;
  const isPrime = (num) => {
    if (num === 1 || num === 0) {
      return false;
    } else if (num === 2) {
      return true;
    } else {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
  };
  let ans_set = [];

  let visited = Array.from({ length: n }, () => 0);

  const search = () => {
    if (ans.length == n) {
      return;
    }
    for (let i = 0; i < num_arr.length; i++) {
      if (!visited[i]) {
        const v = num_arr[i];
        ans.push(v);
        visited[i] = 1;
        if (
          isPrime(Number(ans.join(""))) &&
          !ans_set.includes(Number(ans.join("")))
        ) {
          result++;
          ans_set.push(Number(ans.join("")));
          //console.log("추가1", Number(ans.join("")));
        }
        search();
        ans.pop();
        visited[i] = 0;
      }
    }
  };
  search();
  return result;
};

const numbers = "011";
console.log(solution(numbers));
