//문제: https://programmers.co.kr/learn/courses/30/lessons/12930

function createWeirdCharacters (s) {
  return s.split(" ").map((charList) => charList.split("").map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join("")).join(" ")
}


const items = [
  "try hello world" // =>	"TrY HeLlO WoRlD"

]
console.time("#1")
for (let item of items) {
  console.log(createWeirdCharacters(item)
  );
}
console.timeEnd("#1")
