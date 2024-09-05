// https://school.programmers.co.kr/learn/courses/30/lessons/17683
// 악보에 사용되는 음 C, C#, D, D#, E, F, F#, G, G#, A, A#, B 12개
// 조건이 일치하면 재생 시간이 제일 긴 음악 제목 -> 먼저 입력된 음악 제목
// 없으면 ""

const solution = (m, musicinfos) => {
  const getMusicDuration = (start, end) => {
    const [sh, sm] = start.split(":");
    const [eh, em] = end.split(":");
    return Number(em - sm + (eh - sh) * 60);
  };
  const getFilterMusic = (music) => {
    let result = music;
    result = result.replaceAll("A#", 1);
    result = result.replaceAll("C#", 2);
    result = result.replaceAll("D#", 3);
    result = result.replaceAll("F#", 4);
    result = result.replaceAll("G#", 5);

    return result;
  };
  const ml = m.length;
  m = getFilterMusic(m);

  musicinfos = musicinfos.sort((a, b) => {
    const [aStart, aEnd] = a.split(",");
    const [bStart, bEnd] = b.split(",");
    return getMusicDuration(bStart, bEnd) - getMusicDuration(aStart, aEnd);
  });

  for (let i = 0; i < ml; i++) {
    const [start, end, title, music] = musicinfos[i].split(",");
    const duration = getMusicDuration(start, end);
    let finalMusic = getFilterMusic(music);

    while (finalMusic.length < duration) {
      finalMusic += finalMusic;
    }
    finalMusic = finalMusic.slice(0, duration + 1);
    if (finalMusic.includes(m)) return title;
  }
  return "(None)";
};

const m = "ABC";

const musicinfos = ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"];
console.log(solution());
