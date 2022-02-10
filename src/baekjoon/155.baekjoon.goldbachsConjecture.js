// 문제: https://www.acmicpc.net/problem/9020

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let maxTryCount = null
let tryCount = 0

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

function getCachedIsPrime (num) {
  if (!checkedObj[num]) {
    checkedObj[num] = {
      result: isPrime(num)
    }
  }

  return checkedObj[num].result
}

rl.on('line', function (line) {
  tryCount++

  let inputNum = Number(line)

  if (maxTryCount === null) {
    maxTryCount = inputNum + 1
  } else {
    let firstNum = 0
    let lastNum = 0

    lastNum = Math.ceil(inputNum / 2)

    for (let num = lastNum; num < inputNum; num++) {
      if (getCachedIsPrime(num)) {
        let checkNum = inputNum - num
        if (getCachedIsPrime(checkNum)) {
          firstNum = checkNum
          lastNum = num
          break
        }
      }
    }

    console.log(`${firstNum} ${lastNum}`)
  }

  if (maxTryCount === tryCount) {
    rl.close()
  }
}).on("close", function () {
  process.exit();
});