//문제: https://im-developer.tistory.com/33?category=831367
function maskify(sentence) {
  let result = "";
  let sentenctLength = sentence.length;
  if (sentenctLength > 4) {
    let tailLength = 4;
    let headLength = sentenctLength - tailLength;
    for (let i = 0; i < headLength; i++) {
      result = result + "#";
    }
    result = result + sentence.slice(sentenctLength - tailLength, sentenctLength);
  } else {
    result = sentence;
  }
  return result;
}

let sentences = ["tes", "test", "tetet", "tetete", "testtest", "testtesttest", "testtesttesttesttesttest", "testtesttesttesttesttesttesttesttesttesttesttest"];
for (let i in sentences) {
  let sentence = sentences[i];
  let result = maskify(sentence);
  console.log({ result });
}
