//문제: https://programmers.co.kr/learn/courses/30/lessons/12919

function findKimSeobangInSeoul (seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}


const items = [
  ["Jane", "Kim"] // =>	"김서방은 1에 있다"

]
console.time("#1")
for (let item of items) {
  console.log(findKimSeobangInSeoul(item)
  );
}
console.timeEnd("#1")
