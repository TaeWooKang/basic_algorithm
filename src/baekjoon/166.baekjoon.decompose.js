// 문제: https://www.acmicpc.net/problem/2798

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputs = []

rl.on('line', function (line) {
  inputs.push(line)

  if (inputs.length === 1) {
    rl.close()
  }
}).on("close", function () {
  let result = 0

  const input = inputs[0]

  const num = +input

  for (let i = 0; i <= num; i++) {
    const sum = i + `${i}`.split("").reduce((acc, cur) => acc + +cur, 0)
    if (num === sum) {
      result = i
      break;
    }
  }
  console.log(result)

  process.exit();
});
