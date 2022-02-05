// 문제: https://www.acmicpc.net/problem/1978

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let result = 0
let tryCount = 0

function isPrime(num) {
  if (num < 2) {
    return false
  }
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

rl.on('line', function(line) {
  tryCount++
  
  if (tryCount === 2) {
    const numberList = line.split(" ").map((el) => Number(el))
    
    for (const num of numberList) {
      if (isPrime(num)) {
        result++
      }
    }

    console.log(result)
    
    rl.close()
  }
}).on("close", function() {
  process.exit();
});