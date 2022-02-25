// 문제: https://www.acmicpc.net/problem/2751

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputs = []
let results = ""

rl.on('line', function (line) {
  inputs.push(+line)

  if (inputs.length === inputs[0] + 1) {
    rl.close()
  }
}).on("close", function () {
  let numbers = inputs.slice(1)
  numbers = numbers.sort((a, b) => a-b)
  numbers.forEach(el => results+= el + "\n")
  console.log(results)

  process.exit();
});