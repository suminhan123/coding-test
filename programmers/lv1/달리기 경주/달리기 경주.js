// https://school.programmers.co.kr/learn/courses/30/lessons/178871
// mumu, seo, poe => seo, mumu, poe (seo)

const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];
// mumu seo kai poe mine
// mumu kai seo poe mine
// mumu kai seo mine poe
// mumu kai mine seo poe : result

const solution = (players, callings) => {
  for (const calling of callings) {
    const idx = players.indexOf(calling);
    const before = players[idx - 1];
    const after = players[idx];
    players[idx - 1] = after;
    players[idx] = before;
  }
  return players;
};
console.log(solution(players, callings));
