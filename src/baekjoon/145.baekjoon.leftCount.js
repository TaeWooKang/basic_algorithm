// 문제: https://www.acmicpc.net/problem/3052

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const maxInputLength = 10

let index = 0
let result = new Set()

rl.on('line', function(line) {
  index++
  const inputNumber = Number(line)
  result.add(inputNumber % 42)

  if (maxInputLength === index) {
    console.log(result.size)
    rl.close();
  }
}).on("close", function() {
  process.exit();
});