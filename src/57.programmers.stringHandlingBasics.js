//문제: https://programmers.co.kr/learn/courses/30/lessons/12917

function stringHandlingBasics (s) {
  return (s.length === 4 || s.length === 6)
    && Number(s) > -1 && s.indexOf("e") === -1
}

// @NOTE: Best Practice From Programmers
// function alpha_string46(s){
//   var regex = /^\d{6}$|^\d{4}$/;
//   return regex.test(s);
// }


const items = [
  "a234", //=>	false
  "1234", //=>	true

]
console.time("#1")
for (let item of items) {
  console.log(stringHandlingBasics(item)
  );
}
console.timeEnd("#1")
