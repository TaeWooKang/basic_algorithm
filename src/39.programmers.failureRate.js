//문제: https://programmers.co.kr/learn/courses/30/lessons/1845

function failureRate (N, stages) {
  const tempArray = []

  for (let i = 0; i < N; i++) {
    const round = i + 1
    tempArray[i] = [0, 0, round]
    stages.forEach(stage => {
      if (round === stage) {
        tempArray[i][0]++
        tempArray[i][1]++
      } else if (stage > round) {
        tempArray[i][1]++
      }
    })
  }
  return tempArray.sort((a, b) => {
    return (b[0] / b[1]) - (a[0] / a[1])
  }).map(temp => temp[2])
}

const items = [
  [5, [2, 1, 2, 6, 2, 4, 3, 3]], // => [3,4,2,1,5]
  [4, [4, 4, 4, 4, 4]] // => [4,1,2,3]

]
console.time("#1")
for (let item of items) {
  console.log(failureRate(item[0], item[1])
  );
}
console.timeEnd("#1")
