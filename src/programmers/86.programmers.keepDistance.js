// 문제: https://programmers.co.kr/learn/courses/30/lessons/81302#fn1
// 해답: https://velog.io/@wlgns5376/Programers-Javascript-%EA%B1%B0%EB%A6%AC%EB%91%90%EA%B8%B0-%ED%99%95%EC%9D%B8%ED%95%98%EA%B8%B0-2021-%EC%B9%B4%EC%B9%B4%EC%98%A4-%EC%9D%B8%ED%84%B4%EC%89%BD

function keepDistance (places) {
  const answer = places.map(place => {
    return place.some((row, rowIndex) => {
      return row.split('').some((column, index, arr) => {
        if (column == 'X') return false;
        const userCount = [
          arr[index - 1] || null,
          arr[index + 1] || null,
          (place[rowIndex - 1] || '').charAt(index),
          (place[rowIndex + 1] || '').charAt(index),
        ].filter(v => v == 'P').length;

        if ((column == 'P' && userCount > 0) ||
          (column == 'O' && userCount >= 2)) {
          return true;
        }

        return false;
      }, '');
    }) ? 0 : 1;
  });

  return answer;
}

const items = [
  [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]] // => [ 1, 0, 1, 1, 1]	
]
console.time("#1")
for (let item of items) {
  console.log(keepDistance(item)
  );
}
console.timeEnd("#1")
