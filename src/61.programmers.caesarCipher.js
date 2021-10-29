//문제: https://programmers.co.kr/learn/courses/30/lessons/12926

function caesarCipher (s, n) {
  let answer = ""
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (char.match(/[a-zA-Z]/)) {
      const charIndex = s.charCodeAt(i)
      const minus = charIndex > 96 ? 97 : 65
      const newCharIndex = (charIndex + n - minus) % 26 + minus
      answer += String.fromCodePoint(newCharIndex)
    } else {
      answer += char
    }
  }
  return answer
}


const items = [
  ["AB", 1], // =>	"BC"
  ["z", 1], // =>	"a"
  ["a B z", 4], // => "e F d"
  ["AaZz", 1], // => 'BbAa'
  ["ZzYy", 1] // =>'AaZz'

]
console.time("#1")
for (let item of items) {
  console.log(caesarCipher(item[0], item[1])
  );
}
console.timeEnd("#1")
