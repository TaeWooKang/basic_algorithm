//문제: https://programmers.co.kr/learn/courses/30/lessons/81301

function stringAndAlphabet (s) {
  let answer = "";
  const numToStringObj = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
  }
  let tempString = ""
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i)
    if (char.charCodeAt() >= 97) {
      tempString += char
      if (numToStringObj[tempString] > -1) {
        answer += numToStringObj[tempString]
        tempString = ""
      }
    } else {
      answer += char
    }
  }

  return Number(answer);
}

const items = [
  "one4seveneight", // =>	1478
  "23four5six7", // =>	234567
  "2three45sixseven", // =>	234567
  "123", // =>	123

]
console.time("#1")
for (let item of items) {
  console.log(stringAndAlphabet(item)
  );
}
console.timeEnd("#1")
