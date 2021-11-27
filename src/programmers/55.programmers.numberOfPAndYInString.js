//문제: https://programmers.co.kr/learn/courses/30/lessons/12916

function numberOfPAndYInString (s) {
  const countObject = {
    p: 0,
    y: 0
  }
  for (const char of s) {
    countObject[char.toLowerCase()]++
  }
  return countObject["p"] === countObject["y"];
}


const items = [
  "pPoooyY", // => true
  "Pyy", // => false

]
console.time("#1")
for (let item of items) {
  console.log(numberOfPAndYInString(item)
  );
}
console.timeEnd("#1")
