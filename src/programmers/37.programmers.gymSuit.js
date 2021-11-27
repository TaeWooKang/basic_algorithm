//문제: https://programmers.co.kr/learn/courses/30/lessons/42862#

function gymSuit (n, lost, reserve) {
  let answer = 0;

  const totalObj = {}
  const lostObj = {}
  const reserveObj = {}

  for (let i = 0; i < n; i++) {
    totalObj[i + 1] = 1
  }
  for (let i of lost) {
    lostObj[i] = true
  }
  for (let i of reserve) {
    reserveObj[i] = true
  }

  lost = lost.filter((element => {
    if (reserveObj[element]) {
      reserveObj[element] = false
      return false
    }
    totalObj[element] = 0
    return true
  })).sort((a, b) => a - b)

  reserve = reserve.filter((element => {
    if (lostObj[element]) {
      lostObj[element] = false
      return false
    }
    return true
  })).sort((a, b) => a - b)

  for (let i of reserve) {
    if (reserveObj[i]) {
      if (totalObj[i - 1] === 0) {
        totalObj[i - 1]++
      } else if (totalObj[i + 1] === 0) {
        totalObj[i + 1]++
      }
    }
  }
  Object.keys(totalObj).forEach(key => {
    if (totalObj[key] > 0) {
      answer++
    }
  })

  return answer;
}

const items = [
  [5, [2, 4], [1, 3, 5]], // => 5
  [5, [2, 4], [3]], // => 4
  [3, [3], [1]], // => 2
  [7, [2, 3, 4], [1, 2, 3, 6]], // => 6
  [3, [3], [1]], // => 2
  [5, [4, 2], [3, 5]], // => 5
]
console.time("#1")
for (let item of items) {
  console.log(gymSuit(item[0], item[1], item[2])
  );
}
console.timeEnd("#1")
