// 문제: https://www.acmicpc.net/problem/2562

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const maxInputLength = 9

let index = 0
let maxIndex = null
let maxNumber = null

rl.on('line', function(line) {
  index++
  const inputNumber = Number(line)
  if (maxIndex === null) {
    maxNumber = inputNumber
    maxIndex = index
  } else if (inputNumber > maxNumber) {
    maxNumber = inputNumber
    maxIndex = index
  }

  if (maxInputLength === index) {
    console.log(maxNumber)
    console.log(maxIndex)
    rl.close();
  }
}).on("close", function() {
  process.exit();
});