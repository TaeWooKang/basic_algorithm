// 문제: https://www.acmicpc.net/problem/10818

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let intLength = null
let minNumber = null
let maxNumber = null

rl.on('line', function(line) {
  if (!intLength) {
    intLength = Number(line)
    maxNumber = null
  } else {
    const numbers = line.split(" ").map((el) => Number(el))
    for (let i = 0; i < intLength; i++) {
      const currentNumber = numbers[i]
      if (minNumber === null) {
          minNumber = currentNumber
          maxNumber = currentNumber
      } else {
          minNumber = minNumber > currentNumber ? currentNumber : minNumber
          maxNumber = maxNumber < currentNumber ? currentNumber : maxNumber
      }
    }
    console.log(minNumber + " " + maxNumber)
    rl.close();
  }
}).on("close", function() {
  process.exit();
});
