//문제: https://programmers.co.kr/learn/courses/30/lessons/42748

function getKNumber (array, commands) {
  const answer = []
  commands.forEach(command => {
    answer.push(array.slice(command[0] - 1, command[1]).sort((a, b) => a - b)[command[2] - 1])
  })
  return answer
}

const items = [
  [[1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]] // => [5, 6, 3]
]
console.time("#1")
for (let item of items) {
  console.log(getKNumber(item[0], item[1])
  );
}
console.timeEnd("#1")
