// 문제: https://www.acmicpc.net/problem/4948

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const checkedObj = {}

function isPrime (num) {
  const divider = Math.sqrt(num)

  if (num < 2) {
    return false
  }

  for (let i = 2; i <= divider; i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

rl.on('line', function (line) {
  let result = 0

  let inputNum = Number(line)

  if (inputNum === 0) {
    rl.close()
    return;
  }

  let startNum = inputNum
  let endNum = startNum * 2

  for (let num = startNum + 1; num <= endNum; num++) {
    if (!checkedObj[num]) {
      checkedObj[num] = {
        result: isPrime(num)
      }
    }
    result += checkedObj[num].result
  }

  console.log(result)
}).on("close", function () {
  process.exit();
});