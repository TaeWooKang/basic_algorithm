// 문제: https://www.acmicpc.net/problem/7568

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputs = []

rl.on('line', function (line) {
  inputs.push(line.split(" ").map(el => +el))

  if (inputs.length === inputs[0][0] + 1) {
    rl.close()
  }
}).on("close", function () {
  const total = inputs[0][0]
  const users = inputs.slice(1)

  const result = new Array(total).fill(1)

  for (let i = 0; i < total; i++) {
    for (let j = 0; j < total; j++) {
      if (i !== j) {
        if (users[j][0] > users[i][0] && users[j][1] > users[i][1]) {
          result[i]++
        }
      }
    }
  }

  console.log(result.join(" "))

  process.exit();
});
