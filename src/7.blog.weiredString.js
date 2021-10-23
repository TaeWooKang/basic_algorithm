//문제: https://im-developer.tistory.com/36?category=831367

function getWeiredString (sentence) {
  let tempSentence = ""
  let tempIndex = 0
  for (let char of sentence) {
    if (char === " ") {
      tempSentence = tempSentence + char
      tempIndex = 0
    } else {
      if (tempIndex % 2 === 0) {
        tempSentence = tempSentence + char.toUpperCase()
      } else {
        tempSentence = tempSentence + char.toLowerCase()
      }
      tempIndex++
    }
  }
  return tempSentence
}

const items = [
  "String",//=> returns "StRiNg"
  "Weird string case" //=> returns "WeIrD StRiNg CaSe"
];
console.time("#1")
for (let item of items) {
  console.log(getWeiredString(item)
  );
}
console.timeEnd("#1")
