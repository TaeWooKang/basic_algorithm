//문제: https://programmers.co.kr/learn/courses/30/lessons/72410?language=javascript

function suggestNewId (new_id) {
  let answer = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/, 'a')
    .slice(0, 15).replace(/\.$/, '');
  const length = answer.length;
  if (length < 3) {
    for (let i = 0; i < 3 - length; i++) {
      answer = answer + answer.charAt(length - 1)
    }
  }
  return answer;
}

const items = [
  "...!@BaT#*..y.abcdefghijklm", // =>	"bat.y.abcdefghi"
  "z-+.^.", // =>	"z--"
  "=.=", //=>	"aaa"
  "123_.def", // =>	"123_.def"
  "abcdefghijklmn.p" //=>	"abcdefghijklmn"

]
console.time("#1")
for (let item of items) {
  console.log(suggestNewId(item)
  );
}
console.timeEnd("#1")
