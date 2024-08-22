// https://school.programmers.co.kr/learn/courses/30/lessons/178871
// mumu, seo, poe => seo, mumu, poe (seo)

const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];
// mumu seo kai poe mine
// mumu kai seo poe mine
// mumu kai seo mine poe
// mumu kai mine seo poe : result

const solution = (players, callings) => {
  const playerOrder = {};
  for (let i = 0; i < players.length; i++) {
    playerOrder[players[i]] = i;
  }
  for (const calling of callings) {
    const idx = playerOrder[calling];

    const before = players[idx - 1];
    players[idx - 1] = players[idx];
    players[idx] = before;

    playerOrder[before] = idx;
    playerOrder[calling] = idx - 1;
  }
  return players;
};
console.log(solution(players, callings));
