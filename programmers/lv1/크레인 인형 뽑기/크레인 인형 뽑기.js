// https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  let result = 0;
  let stacklist = [];

  for (const move of moves) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1] !== 0) {
        stacklist.push(board[i][move - 1]);
        board[i][move - 1] = 0;

        if (stacklist.length > 1) {
          const [x] = stacklist.slice(-1);
          const [y] = stacklist.slice(-2, -1);
          if (x === y) {
            stacklist.pop();
            stacklist.pop();

            result += 2;
          }
        }

        break;
      }
    }
  }

  return result;
}
