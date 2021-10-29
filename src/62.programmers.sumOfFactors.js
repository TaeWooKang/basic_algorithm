//문제: https://programmers.co.kr/learn/courses/30/lessons/12928

function sumOfFactors (n) {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) answer += i
  }
  return answer;
}


const items = [
  12, // =>	28
  5, // =>	6

]
console.time("#1")
for (let item of items) {
  console.log(sumOfFactors(item)
  );
}
console.timeEnd("#1")
