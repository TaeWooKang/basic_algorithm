// 문제: https://programmers.co.kr/learn/courses/30/lessons/12945

function fibonacciNumber (n) {
  const fibo = [0, 1]
  for (let i = 2; i <= n; i++) {
    fibo.push(
      (fibo[i - 2] % 1234567
        + fibo[i - 1] % 1234567)
      % 1234567
    )
  }
  return fibo[n];
}

const items = [
  3, //=>	2
  5 //=>	5

]

console.time("#1")
for (let item of items) {
  console.log(fibonacciNumber(item));
}
console.timeEnd("#1")
