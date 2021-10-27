//문제: https://programmers.co.kr/learn/courses/30/lessons/87389

function CalculateTheShortfall (price, money, count) {
  let answer = money;
  for (let i = 1; i <= count; i++) {
    answer -= price * i
  }

  return -Math.min(answer, 0);
}

const items = [
  [3, 20, 4]	// => 10
]
console.time("#1")
for (let item of items) {
  console.log(CalculateTheShortfall(item[0], item[1], item[2])
  );
}
console.timeEnd("#1")
