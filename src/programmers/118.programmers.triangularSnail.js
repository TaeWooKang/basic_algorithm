// 문제: https://programmers.co.kr/learn/courses/30/lessons/68645
// 해답: https://velog.io/@alvin/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4-%EC%82%BC%EA%B0%81-%EB%8B%AC%ED%8C%BD%EC%9D%B4-Javascript

function triangularSnail (n) {
  const answer = new Array(n).fill().map((v, i) => new Array(i + 1));

  let count = 0;
  let row = -1;
  let col = 0;

  while (n > 0) {
    for (let i = 0; i < n; i++) answer[++row][col] = ++count;
    for (let i = 0; i < n - 1; i++) answer[row][++col] = ++count;
    for (let i = 0; i < n - 2; i++) answer[--row][--col] = ++count;
    n -= 3;
  }

  return answer.flat()
}

const items = [
  4, // => [1, 2, 9, 3, 10, 8, 4, 5, 6, 7]
  5, // => [1, 2, 12, 3, 13, 11, 4, 14, 15, 10, 5, 6, 7, 8, 9]
  6 // => [1, 2, 15, 3, 16, 14, 4, 17, 21, 13, 5, 18, 19, 20, 12, 6, 7, 8, 9, 10, 11]

]

console.time("#1")
for (let item of items) {
  console.log(triangularSnail(item[0], item[1]));
}
console.timeEnd("#1")
