//문제: https://programmers.co.kr/learn/courses/30/lessons/12903

function getMiddleString (s) {
  return s.slice(
    parseInt((s.length / 2) - 0.5),
    parseInt(s.length / 2) + 1
  )
}

const items = [
  "abcde", // =>	"c"
  "qwer", // =>	"we"

]
console.time("#1")
for (let item of items) {
  console.log(getMiddleString(item)
  );
}
console.timeEnd("#1")
