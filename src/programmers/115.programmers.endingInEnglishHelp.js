// 문제: https://programmers.co.kr/learn/courses/30/lessons/12981

function endingInEnglishHelp (n, words) {
  let answer = [0, 0];
  let tempObj = {}
  tempObj[words[0]] = true

  for (let i = 1; i < words.length; i++) {
    if (tempObj[words[i]]
      || words[i - 1][words[i - 1].length - 1] !== words[i][0]) {
      answer[0] = (i + 1) % n === 0 ? n : (i + 1) % n
      answer[1] = parseInt((i / n) + 1)
      break;
    }
    tempObj[words[i]] = true
  }

  return answer;
}

const items = [
  [3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]], // =>	[3,3]
  [5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]], // =>	[0,0]
  [2, ["hello", "one", "even", "never", "now", "world", "draw"]] // => 	[1,3]

]

console.time("#1")
for (let item of items) {
  console.log(endingInEnglishHelp(item));
}
console.timeEnd("#1")
