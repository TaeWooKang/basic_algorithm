// 문제: https://www.acmicpc.net/problem/11729

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (line) {
  const result = []

  const num = +line
  function hanoi(num, from, other, to){
    if(num === 0) {
      return;
    } else {
        hanoi(num - 1 , from, to, other);
        result.push([from, to]);
        hanoi(num - 1, other, from, to);
      }
    }
  hanoi(num, '1','2','3');
  console.log(result.length);
  console.log(result.map((el) => el.join(" ")).join("\n"));
  rl.close()
}).on("close", function () {
  process.exit();
});