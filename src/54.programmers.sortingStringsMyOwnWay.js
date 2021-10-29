//문제: https://programmers.co.kr/learn/courses/30/lessons/12915

function sortingStringsMyOwnWay (strings, n) {
  return strings.sort().sort((a, b) => {
    let tempA = a[n];
    let tempB = b[n];
    if (tempA === tempB) {
      tempA = a
      tempB = b
    }
    if (tempA > tempB) {
      return 1
    } else if (tempA < tempB) {
      return -1
    }
    return 0
  })
}


const items = [
  [["sun", "bed", "car"], 1], // =>	["car", "bed", "sun"]
  [["abce", "abcd", "cdx"], 2], // =>	["abcd", "abce", "cdx"]
]
console.time("#1")
for (let item of items) {
  console.log(sortingStringsMyOwnWay(item[0], item[1])
  );
}
console.timeEnd("#1")
