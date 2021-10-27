//문제: https://programmers.co.kr/learn/courses/30/lessons/87389

function FindANumberWhoseRemainderIsOne (n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
}

const items = [
  10, // =>	3
  12, // =>	11
]
console.time("#1")
for (let item of items) {
  console.log(FindANumberWhoseRemainderIsOne(item)
  );
}
console.timeEnd("#1")
