//문제: https://programmers.co.kr/learn/courses/30/lessons/12977

function makePrimeNumber (nums) {
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const tempNum = nums[i] + nums[j] + nums[k]
        answer += 1
        for (let l = 2; l < tempNum; l++) {
          if (tempNum % l === 0) {
            answer -= 1
            break;
          }
        }
      }
    }
  }

  return answer;
}

const items = [
  [1, 2, 3, 4], // =>	1
  [1, 2, 7, 6, 4] // =>	4
]
console.time("#1")
for (let item of items) {
  console.log(makePrimeNumber(item)
  );
}
console.timeEnd("#1")
