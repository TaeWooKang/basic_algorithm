// 문제: https://programmers.co.kr/learn/courses/30/lessons/72411
// 해답: https://gobae.tistory.com/62

function parenthesisConversion (p) {
  if (p === "") return ""; // p가 빈 문자열이면 빈 문자열을 반환한다.
  let u = ""
  let v = "";
  let cnt = 0;

  for (let i = 0; i < p.length; i++) {
    p[i] === "(" ? cnt++ : cnt--;
    if (cnt === 0) {
      u = p.slice(0, i + 1);
      v = p.slice(i + 1);
      break;
    }
  } // p에서 균형잡힌 문자열까지 문자열 u로 선언하고, 나머지를 v로 선언한다.

  for (let i = 0; i < u.length; i++) {
    u[i] === "(" ? cnt++ : cnt--;
    if (cnt < 0) { // cnt < 0 이면 올바른 문자열이 아니므로 3-2를 수행한다.
      let str = "";
      str += `(${parenthesisConversion(v)})`;
      for (let j = 1; j < u.length - 1; j++) {
        u[j] === "(" ? (str += ")") : (str += "(");
      }
      return str;
    }
  }

  return u + parenthesisConversion(v); // 이 3-1의 리턴이 수행되려면 u가 올바른 문자열이어야 한다.
}





const items = [
  "(()())()", // => 	"(()())()"
  ")(", // => 	"()"
  "()))((()", // => 	"()(())()"  

]
console.time("#1")
for (let item of items) {
  console.log(parenthesisConversion(item)
  );
}
console.timeEnd("#1")
