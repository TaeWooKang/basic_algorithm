// 문제: https://programmers.co.kr/learn/courses/30/lessons/72412
// 해답: https://velog.io/@alvin/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4-%EC%88%9C%EC%9C%84-%EA%B2%80%EC%83%89-Javascript

function rankSearch (info, query) {
  const result = []

  const indexObject = {}

  for (const infoItem of info) {
    const infoItemList = infoItem.split(" ")
    const infoScore = Number(infoItemList.pop())
    const keys = makeIndex(infoItemList)
    keys.push(infoItemList.join(""))

    for (const key of keys) {
      if (!indexObject[key]) indexObject[key] = []
      indexObject[key].push(infoScore)
    }
  }

  for (const key of Object.keys(indexObject)) {
    indexObject[key] = indexObject[key].sort((a, b) => a - b)
  }

  for (const queryItem of query) {
    const splited = queryItem.replace(/ and /g, " ").split(" ");
    const queryItemScore = Number(splited.pop());
    const key = splited.join("");
    const array = indexObject[key];

    if (array) {
      let start = 0;
      let end = array.length;
      while (start < end) {
        const mid = parseInt((start + end) / 2);

        if (array[mid] >= queryItemScore) {
          end = mid;
        } else if (array[mid] < queryItemScore) {
          start = mid + 1;
        }
      }
      result.push(array.length - start);
    } else {
      result.push(0);
    }
  }

  return result
}

function makeIndex (array, start = 0) {
  let result = []
  for (let i = start; i < array.length; i++) {
    const temp = [...array]
    temp[i] = "-"
    result.push(temp.join(""))
    makeIndex(temp, i + 1).forEach((el) => {
      result.push(el)
    })
  }
  return result
}

const items = [
  [
    ["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"],
    ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200", "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"],
    // => [1, 1, 1, 1, 2, 4]
  ]


]
console.time("#1")
for (let item of items) {
  console.log(rankSearch(item[0], item[1])
  );
}
console.timeEnd("#1")
