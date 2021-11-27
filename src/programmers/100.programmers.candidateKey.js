// 문제: https://programmers.co.kr/learn/courses/30/lessons/72412
// 해답: https://velog.io/@sqaurelu/ALGO-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%ED%9B%84%EB%B3%B4%ED%82%A4%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-javascript

function candidateKey (relation) {
  let answer = 0;

  let col = relation[0].length;
  let row = relation.length;

  let bitmask = [];
  for (let i = 1; i < (1 << col); i++) {
    let bit = '';
    for (let j = 0; j < col; j++) {
      if ((i & (1 << j)) !== 0) bit += j;
    }
    bitmask.push(bit);
    bit = '';
  }

  bitmask.sort((a, b) => a.length - b.length);

  while (bitmask.length > 0) {
    let col = bitmask.shift().split('').map(Number);
    let set = new Set();

    relation.map(tuple => {
      let tmp = '';

      for (let i = 0; i < col.length; i++) {
        tmp += tuple[col[i]];
      }
      set.add(tmp);
    });

    if (set.size === row) {
      answer += 1;
      bitmask = bitmask.filter(item => !col.every(v => item.includes(v)));
    }
  }

  return answer;
}

const items = [
  [["100", "ryan", "music", "2"], ["200", "apeach", "math", "2"], ["300", "tube", "computer", "3"], ["400", "con", "computer", "4"], ["500", "muzi", "music", "3"], ["600", "apeach", "music", "2"]] // => 2


]

console.time("#1")
for (let item of items) {
  console.log(candidateKey(item)
  );
}
console.timeEnd("#1")
