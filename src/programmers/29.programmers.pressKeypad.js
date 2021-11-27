//문제: https://programmers.co.kr/learn/courses/30/lessons/67256

function pressKeypad (numbers, hand) {
  let answer = '';
  let currentLeft = [3, 0]
  let currentRight = [3, 2]
  numbers.forEach(number => {
    if (number === 0) number = 11
    const row = parseInt(number / 3)
    const index = (number % 3)
    if (index === 1) {
      answer += "L"
      currentLeft = [row, 0]
    } else if (index === 0) {
      answer += "R"
      currentRight = [row - 1, 2]
    } else {
      const leftdiff =
        Math.abs(currentLeft[0] - row)
        + Math.abs(currentLeft[1] - 1)
      const rightdiff =
        Math.abs(currentRight[0] - row)
        + Math.abs(currentRight[1] - 1)
      if (leftdiff === rightdiff) {
        if (hand === "left") {
          answer += "L"
          currentLeft = [row, 1]
        } else {
          answer += "R"
          currentRight = [row, 1]
        }
      } else if (leftdiff > rightdiff) {
        answer += "R"
        currentRight = [row, 1]
      } else {
        answer += "L"
        currentLeft = [row, 1]
      }
    }
  })

  return answer;
}

const items = [
  [[1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"], // =>	"LRLLLRLLRRL"
  [[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"], // =>	"LRLLRRLLLRR"
  [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"] // =>	"LLRLLRLLRL"

]
console.time("#1")
for (let item of items) {
  console.log(pressKeypad(item[0], item[1])
  );
}
console.timeEnd("#1")
