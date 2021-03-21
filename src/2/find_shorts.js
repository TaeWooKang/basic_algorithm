//문제: https://im-developer.tistory.com/24?category=831367
function findShorts1(sentence) {
  let words = (sentence && sentence.split(" ")) || [];
  let minLength = words[0].length;
  words.forEach((element) => {
    let wordLength = element.length;
    if (minLength > element.length) {
      minLength = wordLength;
    }
  });
  return minLength;
}

function findShorts2(sentence) {
  let words = (sentence && sentence.split(" ")) || [];
  words = words.sort((a, b) => {
    return a.length - b.length;
  });
  return words[0].length;
}

let sentence = "고양이가 귀엽기는 하지만 강아지만큼은 아니다.";
let result1 = findShorts1(sentence);
let result2 = findShorts2(sentence);
console.log(result1);
console.log(result2);
