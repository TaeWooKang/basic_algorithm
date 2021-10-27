//문제: https://programmers.co.kr/learn/courses/30/lessons/60057

function stringCompression (s) {
  let answer = s.length;

  for (let i = 1; i < s.length; i++) {
    let tempSentense = ""
    let tempChar = ""
    let tempNum = 0
    for (let j = i; j <= s.length + i; j += i) {
      const currentChar = s.slice(j - i, j)
      if (tempChar !== currentChar) {
        if (tempNum === 1) {
          tempSentense += tempChar
        }
        else if (tempNum > 1) {
          tempSentense += `${tempNum}${tempChar}`
        }
        tempNum = 1
      } else {
        tempNum++
      }
      tempChar = currentChar
    }
    tempSentense += s.slice(s.length - s.length % i)

    answer = Math.min(answer, tempSentense.length)
  }

  return answer;
}

const items = [
  "aabbaccc", // =>	7
  "ababcdcdababcdcd", // =>	9
  "abcabcdede", // =>	8
  "abcabcabcabcdededededede", // =>	14
  "xababcdcdababcdcd", // =>	17
  "xxxxxxxxxxyyy", // => 5
  "a", // => 1
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", // => 4
  "zxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", // => 5
  "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxz", // => 5


]
console.time("#1")
for (let item of items) {
  console.log(stringCompression(item)
  );
}
console.timeEnd("#1")
