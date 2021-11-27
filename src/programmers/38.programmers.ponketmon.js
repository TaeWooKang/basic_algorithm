//문제: https://programmers.co.kr/learn/courses/30/lessons/1845

function ponketmon (nums) {
  const numSet = new Set(nums);
  const distinctList = [...numSet];

  return Math.min(distinctList.length, parseInt(nums.length / 2))
}

const items = [
  [3, 1, 2, 3], // =>	2
  [3, 3, 3, 2, 2, 4], // =>	3
  [3, 3, 3, 2, 2, 2] // =>	2

]
console.time("#1")
for (let item of items) {
  console.log(ponketmon(item)
  );
}
console.timeEnd("#1")
