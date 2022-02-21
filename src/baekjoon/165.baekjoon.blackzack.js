// 문제: https://www.acmicpc.net/problem/2798

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputs = []

rl.on('line', function (line) {
  inputs.push(line)

  if (inputs.length === 2) {
    rl.close()
  }
}).on("close", function () {
  const [ cardLength, max ] = inputs[0].split(" ").map(el => +el)
  const cards = inputs[1].split(" ").map(el => +el)
  let result = 0

  for (let i = 0; i < cardLength; i++) {
    for (let j = i + 1; j < cardLength; j++) {
      for (let k = j + 1; k < cardLength; k++) {
        const sum = cards[i] + cards[j] + cards[k]
        if (max >= sum && sum > result) {
          result = sum
        }
      }
    }
  }
  console.log(result)
  process.exit();
});
