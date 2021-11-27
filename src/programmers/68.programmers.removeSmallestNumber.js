//문제: https://programmers.co.kr/learn/courses/30/lessons/12935

function removeSmallestNumber (arr) {
  let answer = [-1]
  let minimumValue = Math.min(...arr)
  answer = arr.filter((val) => val !== minimumValue)
  answer = answer.length === 0 ? [-1] : answer
  return answer
}


const items = [
  [4, 3, 2, 1], // =>	[4,3,2]
  [10], // =>	[-1]


]
console.time("#1")
for (let item of items) {
  console.log(removeSmallestNumber(item)
  );
}
console.timeEnd("#1")
