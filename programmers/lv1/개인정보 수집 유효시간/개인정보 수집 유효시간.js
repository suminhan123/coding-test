// 개인정보 n개 => 약관 종류 여러가지 각각 유효기간이 정해져있
// A : 12달 2021년 1월 5일 -> 2022년 1월 4일까지 보관 가능
// 오늘날짜 기준으로 파기해야할 개인 정보 종류 반환

// 개인정보 날짜가 오늘날짜보다 크면 true => false 면 파기
const getPrivacyTodayAfter = (today, month, privacy) => {
  const todayDate = new Date(today);
  const privacyDate = new Date(privacy);
  privacyDate.setMonth(privacyDate.getMonth() + parseInt(month));
  // console.log(todayDate, privacyDate);
  return privacyDate > todayDate;
};

const solution = (today, terms, privacies) => {
  const object = {};
  for (const term of terms) {
    const [p, m] = term.split(" ");
    object[p] = m;
  }
  let result = [];
  for (let i = 1; i <= privacies.length; i++) {
    const [time, term] = privacies[i - 1].split(" ");
    const isAfter = getPrivacyTodayAfter(today, object[term], time);
    console.log(isAfter);
    !isAfter && result.push(i);
  }
  return result;
};
const today = "2022.05.19";
const terms = ["A 6", "B 12", "C 3"];
const privacies = [
  "2021.05.02 A",
  "2021.07.01 B",
  "2022.02.19 C",
  "2022.02.20 C",
];
console.log(solution(today, terms, privacies));
