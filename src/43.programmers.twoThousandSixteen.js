//문제: https://programmers.co.kr/learn/courses/30/lessons/12982

function twoThousandSixteen (a, b) {
  return ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][new Date(`2016-${a}-${b}`).getDay()]
}

const items = [
  [5, 24] // =>	"TUE"
]
console.time("#1")
for (let item of items) {
  console.log(twoThousandSixteen(item[0], item[1])
  );
}
console.timeEnd("#1")
