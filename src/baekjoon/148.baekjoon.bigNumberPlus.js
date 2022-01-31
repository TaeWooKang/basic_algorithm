// 문제: https://www.acmicpc.net/problem/1193

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  let result = []
  let hasUpper = 0

  const spliitedString = line.split(" ")
  const num1Array = spliitedString[0].split("").reverse()
  const num2Array = spliitedString[1].split("").reverse()

  const maxLength = Math.max(num1Array.length, num2Array.length)

  for (let i = 0; i < maxLength; i++) {
    const num1Number = Number(num1Array[i]) || 0
    const num2Number = Number(num2Array[i]) || 0
    let total = num1Number + num2Number + hasUpper
    if (total > 9) {
      hasUpper = 1
      total = total - 10
    } else {
      hasUpper = 0
    }
    result.push(total)
  }

  result = result.reverse().join("")

  if (hasUpper) {
    result = "1" + result
  }

  console.log(result)
  rl.close()
}).on("close", function() {
  process.exit();
});