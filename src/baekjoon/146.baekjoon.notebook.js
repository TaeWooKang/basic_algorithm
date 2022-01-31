// 문제: https://www.acmicpc.net/problem/3052

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  let result = 0

  const splittedLine = line.split(" ")
  const A = Number(splittedLine[0])
  const B = Number(splittedLine[1])
  const C = Number(splittedLine[2])

  const CB = C - B

  if (CB > 0) {
    result = parseInt(A / CB) + 1
  } else {
    result = -1
  }
  console.log(result)
  rl.close()
}).on("close", function() {
  process.exit();
});