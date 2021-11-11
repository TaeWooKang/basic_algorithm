// 문제: https://programmers.co.kr/learn/courses/30/lessons/86052

function printer (priorities, location) {
  let answer = 0;
  let loop = true
  let tempPriorities = priorities.map((value, index) => [value, index])

  if (priorities.length > location) {
    while (loop) {
      answer++
      const max = Math.max(...priorities)
      const maxIndex = priorities.indexOf(max)
      priorities = [...priorities.slice(maxIndex), ...priorities.slice(0, maxIndex)]
      tempPriorities = [...tempPriorities.slice(maxIndex), ...tempPriorities.slice(0, maxIndex)]
      if (tempPriorities[0][1] === location) {
        loop = false
      } else {
        priorities.splice(0, 1)
        tempPriorities.splice(0, 1)
      }
    }
  }
  return answer
}

const items = [
  [[2, 1, 3, 2], 2], // =>	1
  [[1, 1, 9, 1, 1, 1], 0]	// => 5

]
console.time("#1")
for (let item of items) {
  console.log(printer(item[0], item[1])
  );
}
console.timeEnd("#1")
