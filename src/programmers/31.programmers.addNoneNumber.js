//문제: https://programmers.co.kr/learn/courses/30/lessons/81301

function addNoneNumber (numbers) {
  let answer = 45;

  for (const number of numbers) {
    answer -= number
  }
  return answer;
}

const items = [
  [1, 2, 3, 4, 6, 7, 8, 0], // =>	14
  [5, 8, 4, 0, 6, 7, 9], // =>	6

]
console.time("#1")
for (let item of items) {
  console.log(addNoneNumber(item)
  );
}
console.timeEnd("#1")
