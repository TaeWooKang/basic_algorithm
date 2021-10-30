//문제: https://programmers.co.kr/learn/courses/30/lessons/12943

function colatzGuess (num) {
  let temp = num
  let answer = 0;
  while (temp !== 1 && answer < 500) {
    temp = temp % 2 === 0 ? temp / 2 : (temp * 3) + 1
    answer++
  }
  return temp !== 1 ? -1 : answer;
}


const items = [
  6, // => 8
  16, // => 4
  626331, // => -1

]
console.time("#1")
for (let item of items) {
  console.log(colatzGuess(item)
  );
}
console.timeEnd("#1")
