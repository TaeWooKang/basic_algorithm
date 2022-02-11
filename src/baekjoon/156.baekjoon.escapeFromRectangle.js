// 문제: https://www.acmicpc.net/problem/1085

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const numList = line.split(" ").map(el => +el)
  const result = Math.min(
    numList[0],
    numList[1],
    numList[2] - numList[0],
    numList[3] - numList[1]
  )

  console.log(result)

  rl.close()
}).on("close", function () {
  process.exit();
});