// 문제: https://programmers.co.kr/learn/courses/30/lessons/12951

function creatingJadenCaseStrings (s) {
  return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()).join(" ");
}

const items = [
  "3people unFollowed me", // =>	"3people Unfollowed Me"
  "for the last week" // =>	"For The Last Week"  

]
console.time("#1")
for (let item of items) {
  console.log(creatingJadenCaseStrings(item)
  );
}
console.timeEnd("#1")
