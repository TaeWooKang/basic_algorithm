//문제: https://programmers.co.kr/learn/courses/30/lessons/62048

function plainSquare (record) {
  const max = w * h
  const bcd = ((a, b) => a % b === 0 ? b : bcd(b, a % b))
  return max - (w + h - bcd(w, h));
}



const items = [
  [8, 12] // =>	80

]
console.time("#1")
for (let item of items) {
  console.log(plainSquare(item)
  );
}
console.timeEnd("#1")
