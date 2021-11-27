// 문제: https://programmers.co.kr/learn/courses/30/lessons/77485
// 해답: https://velog.io/@sso/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-javascript-1%EC%B0%A8%EB%89%B4%EC%8A%A4%ED%81%B4%EB%9F%AC%EC%8A%A4%ED%84%B0%EB%A7%81

function FirstNewsClustering (str1, str2) {
  let answer = 0;
  const union = []
  const intersect = []

  const arr1 = [];
  const arr2 = [];
  const regEx = /^[a-zA-Z]+$/;

  for (let i = 0; i < str1.length - 1; i++) {
    const subStr = str1.toLowerCase().substring(i, i + 2);
    if (regEx.test(subStr)) {
      arr1.push(subStr);
    }
  }

  for (let j = 0; j < str2.length - 1; j++) {
    const subStr = str2.toLowerCase().substring(j, j + 2);
    if (regEx.test(subStr)) {
      arr2.push(subStr);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) >= 0) {
      intersect.push(arr1.splice(arr1.indexOf(arr2[i]), 1))
    }
    union.push(arr2[i])
  }

  for (var i = 0; i < arr1.length; i++) {
    union.push(arr1[i])
  }

  answer = parseInt((union.length === 0 ? 1 : intersect.length / union.length) * 65536)

  return answer;
}

const items = [
  ["FRANCE", "french"],	// => 16384
  ["handshake", "shake hands"],	// => 65536
  ["aa1+aa2", "AAAA12"],	// => 43690
  ["E=M*C^2", "e=m*c^2"],	// => 65536


]
console.time("#1")
for (let item of items) {
  console.log(FirstNewsClustering(item[0], item[1])
  );
}
console.timeEnd("#1")
