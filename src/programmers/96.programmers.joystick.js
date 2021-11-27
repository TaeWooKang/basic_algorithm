// 문제: https://programmers.co.kr/learn/courses/30/lessons/42860
// 해답: https://1coding.tistory.com/171

function joystick (name) {
  const arr = [0];
  const answer = [...name].reduce((answer, s, i) => {
    if (s === "A") {
      if (name[i - 1] != "A") arr.push(getACount(name.substring(i)) - (i - 1))
      return answer + 1;
    }
    return answer + calcDiff(name, i) + 1
  }, 0)
  return answer - Math.max(...arr) - 1;
}
function calcDiff (name, i) {
  let diff = name.charCodeAt(i) - 65;
  if (diff > 13)
    diff = 26 - diff;

  return diff;
}
function getACount (name) {
  let repeat = 0;

  for (let i = 0; i < name.length; i++) {
    if (name[i] != "A")
      break;
    repeat++;
  }
  return repeat;
}

const items = [
  "JEROEN", // => 56
  "JAN", // => 23

]
console.time("#1")
for (let item of items) {
  console.log(joystick(item)
  );
}
console.timeEnd("#1")
