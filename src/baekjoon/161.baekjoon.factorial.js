// 문제: https://www.acmicpc.net/problem/10872

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const num = +line
  let result = 1
  let tryCount = 1

  while(tryCount < num) {
    tryCount++
    result = result * tryCount
  }

  console.log(result)

  rl.close()
}).on("close", function () {
  process.exit();
});