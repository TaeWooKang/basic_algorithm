//문제: https://programmers.co.kr/learn/courses/30/lessons/42586

function functionDevelopment (progresses, speeds) {
  const answer = [];
  const tempAnswer = [];
  let tempMax = 0
  progresses.forEach((progress, index) => {
    const leftWorks = 100 - progress
    const calcDay = parseInt(leftWorks / speeds[index]) + (leftWorks % speeds[index] > 0 ? 1 : 0)
    tempAnswer.push(calcDay)
  })
  tempMax = tempAnswer[0] - 1
  tempAnswer.forEach(temp => {
    if (temp > tempMax) {
      tempMax = temp
      answer.push(1)
    } else {
      answer[answer.length - 1]++
    }
  })
  return answer
}



const items = [
  [[93, 30, 55], [1, 30, 5]], // =>	[2, 1]
  [[95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]] // =>	[1, 3, 2]


]
console.time("#1")
for (let item of items) {
  console.log(functionDevelopment(item[0], item[1])
  );
}
console.timeEnd("#1")
