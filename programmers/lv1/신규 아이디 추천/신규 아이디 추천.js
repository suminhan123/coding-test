// https://school.programmers.co.kr/learn/courses/30/lessons/72410
// 카카오 서비스에 가입하는 유저들의 아이디를 생성
// 아이디 규칙에 맞지 않는 아이디를 입력했을 때 규칙에 맞는 유사한 아이디를 추천
// 1. 3자 이상 15자 이하
// 2. 알파벳 소문자, 숫자, -, _, . 만 사용가능
// 3. .은 처음과 끝에 사용할 수 없고 연속으로 사용 X

// ex) "...!@BaT#*..y.abcdefghijklm"
// 1. 모든 대문자를 소문자로 치환 ("...!@bat#*..y.abcdefghijklm")
// 2. 제외한 모든 문자를 제거 ("...bat..y.abcdefghijklm")
// 3-1. . 두번 연속된 부분 . 하나로 치환
// 3-2. 처음 끝에 있으면 제거 ("bat.y.abcdefghijklm")
// 5. 16자 이상이면 15개 문자빼고 제거 => 제거 후에 . 이 있으면 제거 ("bat.y.abcdefghi")

// 4. 빈 문자열이면 "a"를 대입
// 6. 2자 이하이면 마지막 문자를 반복 길이가 3이 되도록

const strPlusLengthThree = (str) => {
  let len = 3 - str.length;

  if (len === 3) {
    return "aaa";
  }

  while (len > 0) {
    str += str[str.length - 1];
    len--;
  }
  return str;
};
const solution = (new_id) => {
  let result = "";
  const lowerNewId = new_id.toLowerCase(); // 1단계

  const specialStr = "~!@#$%^&*()=+[{]}:?,<>/"; // 2단계
  for (let i = 0; i < lowerNewId.length; i++) {
    if (!specialStr.includes(lowerNewId[i])) {
      result += lowerNewId[i];
    }
  }

  if (result.length <= 3 && !result.includes(".")) {
    // result 완성!!
    result = strPlusLengthThree(result);
    return result;
  }

  // ...bat..y.abcdefghijklm
  let dot = []; // 3-1 단계

  for (let i = 0; i < result.length; i++) {
    if (result[i] === ".") {
      let isAddDot = true;
      dot = dot.map((value) => {
        if (!value.complete) {
          isAddDot = false;
        }
        if (!value.complete && result[i + 1] !== ".") {
          return { ...value, end: i, complete: true };
        }
        return value;
      });
      if (isAddDot || dot.length === 0) {
        if (result[i + 1] === ".") {
          dot.push({ start: i, complete: false });
        } else {
          dot.push({ start: i, end: i, complete: true });
        }
      }
    }
  }

  for (let i = dot.length - 1; i >= 0; i--) {
    let { start, end } = dot[i];
    if (end - start > 0) {
      result = result.slice(0, start) + "." + result.slice(end + 1);
    }
  }

  // 3-2 단계
  if (result[0] === ".") {
    result = result.slice(1);
  }

  if (result[result.length - 1] === ".") {
    result = result.slice(0, result.length - 1);
  }
  // 5단계
  if (result.length >= 16) {
    result = result.slice(0, 15);
  }
  if (result[result.length - 1] === ".") {
    result = result.slice(0, result.length - 1);
  }

  if (result.length < 3) {
    result = strPlusLengthThree(result);
  }

  return result;
};
const new_id = "...!@BaT#*..y.abcdefghijklm";

console.log(solution(new_id));

// 좋은 풀이
function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, "") // 2
    .replace(/\.+/g, ".") // 3
    .replace(/^\.|\.$/g, "") // 4
    .replace(/^$/, "a") // 5
    .slice(0, 15)
    .replace(/\.$/, ""); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}
new_id.toLowerCase().replace(/[^\w_-.]/g, "");
