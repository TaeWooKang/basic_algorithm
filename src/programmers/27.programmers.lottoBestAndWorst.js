//문제: https://programmers.co.kr/learn/courses/30/lessons/77484#fn1

function lottoBestAndWorst (lottos, win_nums) {
  let answer = [7, 7]
  const winNumsObj = {}

  for (let i = 0; i < lottos.length; i++) {
    winNumsObj[win_nums[i]] = true
  }

  for (const num of lottos) {
    // worst
    if (winNumsObj[num]) {
      answer[0]--
      answer[1]--
    } else if (num === 0) {
      // best
      answer[0]--
    }
  }

  // worst
  answer[1] = answer[1] > 6 && 6 || answer[1]
  // best
  answer[0] = answer[0] > 6 && 6 || answer[0]

  return answer;
}

const items = [
  [[44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]], // => [3, 5]
  [[0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]], // => [1, 6]
  [[45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]] // => [1, 1]
]
console.time("#1")
for (let item of items) {
  console.log(lottoBestAndWorst(item[0], item[1])
  );
}
console.timeEnd("#1")
