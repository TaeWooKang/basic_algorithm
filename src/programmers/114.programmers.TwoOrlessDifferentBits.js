// 문제: https://programmers.co.kr/learn/courses/30/lessons/77885
// 해답: https://www.apexcel.blog/ps/programmers/77885/77885/

function TwoOrlessDifferentBits (numbers) {
  let answer = [];

  for (const num of numbers) {
    answer.push(getDiffBit(num))
  }

  return answer;
}

function getDiffBit (num) {
  if (num % 2 === 0) {
    return num + 1
  }
  let bitList = num.toString(2).split("")
  let zeroIndex = 0

  for (let i = bitList.length; i > 0; i--) {
    if (bitList[i] === "0") {
      zeroIndex = i
      break;
    }
  }
  if (zeroIndex === 0) {
    bitList = ["1", ...bitList]
  } else {
    bitList[zeroIndex] = "1"
  }
  bitList[zeroIndex + 1] = "0"

  return parseInt(bitList.join(""), "2")
}

// 좋은 해답 사이트
// function solution(numbers) {
//   return numbers.map(n => fn(n));
// }

// function fn(n) {
//   if (n % 2 === 0) return n + 1;
//   const bit = n.toString(2).split('');
//   let pos = 0;
//   for (pos = bit.length; pos > 0; pos -= 1) {
//       if (bit[pos] === '0') {
//           break;
//       }
//   }
//   pos ? bit[pos] = '1' : bit.unshift('1');
//   bit[pos+1] = '0';

//   return parseInt(bit.join(''), 2);
// }



const items = [
  [2, 7], // => [3,11]

]

console.time("#1")
for (let item of items) {
  console.log(TwoOrlessDifferentBits(item));
}
console.timeEnd("#1")
