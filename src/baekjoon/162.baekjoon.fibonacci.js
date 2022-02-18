// 문제: https://www.acmicpc.net/problem/10870

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const num = +line
  const max = num + 1

  const result = [0, 1]

  while(result.length < max) {
    result.push(result[result.length-2] + result[result.length-1])
  }

  console.log(result[num])

  rl.close()
}).on("close", function () {
  process.exit();
});