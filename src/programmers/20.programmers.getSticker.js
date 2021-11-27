// 문제: https://programmers.co.kr/learn/courses/18/lessons/1881

function solution (sticker) {
  const length = sticker.length
  const results = [sticker[0]]
  if (length > 2) {
    const first = [sticker[0], sticker[0]]
    const second = [0, sticker[1]]

    for (let i = 2; i < length - 1; i++) {
      first[i] = Math.max(first[i - 2] + sticker[i], first[i - 1])
    }
    for (let i = 2; i < length; i++) {
      second[i] = Math.max(second[i - 2] + sticker[i], second[i - 1])
    }
    results.push(first[length - 2])
    results.push(second[length - 1])
  }
  return Math.max(...results)
}

const items = [
  [14, 6, 5, 11, 3, 9, 2, 10], // =>	36
  [1, 3, 2, 5, 4] // =>	8
]
console.time("#1")
for (let item of items) {
  console.log(solution(item)
  );
}
console.timeEnd("#1")
