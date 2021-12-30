// 문제: https://programmers.co.kr/learn/courses/30/lessons/12941

function createAMinimum (A, B) {
  let answer = 0;
  A.sort((a, b) => a - b)
  B.sort((a, b) => b - a)

  answer = A.reduce((acc, cur, idx) => acc += (cur * B[idx]), answer)

  return answer;

}

const items = [
  [[1, 4, 2], [5, 4, 4]], //=>	29
  [[1, 2], [3, 4]], // => 10


]

console.time("#1")
for (let item of items) {
  console.log(createAMinimum(item[0], item[1]));
}
console.timeEnd("#1")
