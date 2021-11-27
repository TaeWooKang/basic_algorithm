//문제: https://programmers.co.kr/learn/courses/30/lessons/76501

function addYinAndYang (absolutes, signs) {
  const answer = absolutes.reduce((acc, cur, index) => acc + (signs[index] && cur || -cur), 0)
  return answer;
}

const items = [
  [[4, 7, 12], [true, false, true]], // =>	9
  [[1, 2, 3], [false, false, true]], // =>	0
]
console.time("#1")
for (let item of items) {
  console.log(addYinAndYang(item[0], item[1])
  );
}
console.timeEnd("#1")
