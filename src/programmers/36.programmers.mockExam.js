//문제: https://programmers.co.kr/learn/courses/30/lessons/42840

function mockExam (answers) {
  let answer = [];
  const guysPick = [
    [],
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ];
  const scoreList = [0, 0, 0, 0];
  answers.forEach((element, index) => {
    guysPick.forEach((pick, guyIndex) => {
      if (element === pick[index % pick.length]) {
        scoreList[guyIndex] += 1
      }
    })
  })
  const maxScore = Math.max(...scoreList)
  scoreList.forEach((score, guyIndex) => {
    if (maxScore === score) {
      answer.push(guyIndex)
    }
  })

  return answer;
}

const items = [
  [1, 2, 3, 4, 5], // =>	[1]
  [1, 3, 2, 4, 2] // =>	[1,2,3]

]
console.time("#1")
for (let item of items) {
  console.log(mockExam(item)
  );
}
console.timeEnd("#1")
