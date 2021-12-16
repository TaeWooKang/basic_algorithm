// 문제: https://programmers.co.kr/learn/courses/30/lessons/42885

function lifeBoat (people, limit) {
  let answer = 0
  people = people.sort((a, b) => a - b)

  while (people.length > 0) {
    let last = people.pop()
    let first = people[0]
    if (last + first <= limit) {
      people.shift()
    }
    answer++
  }

  return answer;
}

const items = [
  [[70, 50, 80, 50], 100], // =>	3
  [[70, 80, 50], 100],	// => 3  

]

console.time("#1")
for (let item of items) {
  console.log(lifeBoat(item[0], item[1]));
}
console.timeEnd("#1")
