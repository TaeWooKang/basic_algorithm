// 문제: https://programmers.co.kr/learn/courses/30/lessons/12911

function nextBigNumber (n) {
  const firstCount = getOneCount(n)
  for (let i = 1; i < 1000000; i++) {
    const newCount = getOneCount(n + i)
    if (firstCount === newCount) {
      return n + i
    }
  }
  return -1
}

function getOneCount (num) {
  const s = num.toString(2)
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") count++
  }
  return count
}

const items = [
  78, // =>	83
  15 // =>	23

]

console.time("#1")
for (let item of items) {
  console.log(nextBigNumber(item));
}
console.timeEnd("#1")
