//문제: https://programmers.co.kr/learn/courses/30/lessons/62048

function plainSquare (record) {
  const max = w * h
  const bcd = ((a, b) => a % b === 0 ? b : bcd(b, a % b))
  return max - (w + h - bcd(w, h));
}



const items = [
  ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"] // =>	["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

]
console.time("#1")
for (let item of items) {
  console.log(plainSquare(item)
  );
}
console.timeEnd("#1")
