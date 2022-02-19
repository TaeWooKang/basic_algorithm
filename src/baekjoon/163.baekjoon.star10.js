// 문제: https://www.acmicpc.net/problem/10870

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const num = +line
  let result = ""

  function paintStar(num1, num2) {
    if (num1 % 3 === 1 && num2 % 3 === 1) {
      return " "
    } else {
      const sub1 = Math.floor(num1 / 3)
      const sub2 = Math.floor(num2 / 3)
      if (sub1 === 0 && sub2 === 0) {
        return "*"
      } else {
        return paintStar(sub1, sub2)
      }
    }
  }

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      result += paintStar(i, j)
    }
    if (i !== num -1) {
      result += "\n"
    }
  }

  console.log(result)

  rl.close()
}).on("close", function () {
  process.exit();
});