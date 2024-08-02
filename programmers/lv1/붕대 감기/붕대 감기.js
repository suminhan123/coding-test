// https://school.programmers.co.kr/learn/courses/30/lessons/250137

attacks = [
  [1, 15],
  [5, 16],
  [8, 6],
];
console.log(attacks.slice(-1)[0][0]);
bandage = [4, 2, 7];
health = 20;

const isAttackTime = (time, attacks) => {
  let temp = false;
  let demage = 0;

  for (const attack of attacks) {
    if (attack[0] === time) {
      demage = attack[1];
      temp = true;
    }
    if (time < attack[0]) break;
  }
  return [temp, demage];
};
const solution = (bandage, health, attacks) => {
  let time = 1;
  const maxTime = attacks.slice(-1)[0][0] + 1;
  const [techtime, recover, plusrecover] = bandage;
  let success = 0;
  let playHealth = health;

  while (time != maxTime) {
    const [isAttack, demage] = isAttackTime(time, attacks);

    if (isAttack) {
      success = 0;
      playHealth -= demage;

      if (playHealth <= 0) {
        return -1;
      }
    } else {
      success += 1;
      playHealth += recover;
      if (success === techtime) {
        playHealth += plusrecover;
        success = 0;
      }

      if (playHealth > health) {
        playHealth = health;
      }
    }
    time += 1;
  }
  if (playHealth <= 0) {
    return -1;
  } else {
    return playHealth;
  }
};
