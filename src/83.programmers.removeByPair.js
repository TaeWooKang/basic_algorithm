//문제: https://programmers.co.kr/learn/courses/30/lessons/12973

function removeByPair (s) {
  const array = [];
  for (const char of s) {
    if (array[array.length - 1] !== char) {
      array.push(char);
    } else {
      array.pop();
    }
  }
  return (array.length > 0) ? 0 : 1;
}



const items = [
  "baabaa", // =>	1
  "cdcd", // =>	0

]
console.time("#1")
for (let item of items) {
  console.log(removeByPair(item)
  );
}
console.timeEnd("#1")
