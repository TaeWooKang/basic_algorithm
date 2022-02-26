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
  const numbers = inputs.slice(1)
  const max = Math.max(...numbers)
  const numArray = new Array(max + 1).fill(0)
  numbers.forEach(el => numArray[el]++)

  for (let i = 0; i < numArray.length; i++) {
    const num = numArray[i]
    for (let j = 0; j < num; j++) {
      results += i + "\n"
    }
  }

  console.log(results)

  process.exit();
});