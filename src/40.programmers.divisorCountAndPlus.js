//문제: https://programmers.co.kr/learn/courses/30/lessons/77884

function divisorCountAndPlus (left, right) {
  let answer = 0;
  for (let num = left; num <= right; num++) {
    let divisorCount = 0
    for (let i = 0; i <= num; i++) {
      if (num % i === 0) {
        divisorCount++
      }

    }
    if (divisorCount % 2 === 0) {
      answer += num
    } else {
      answer -= num
    }
  }
  return answer;
}

const items = [
  [13, 17], // =>	43
  [24, 27], // =>	52

]
console.time("#1")
for (let item of items) {
  console.log(divisorCountAndPlus(item[0], item[1])
  );
}
console.timeEnd("#1")
