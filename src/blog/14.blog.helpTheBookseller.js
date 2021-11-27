//문제: https://im-developer.tistory.com/44?category=831367

function helpTheBookseller (bookData) {
  const { L = [], M = [] } = bookData
  const tempObject = {}
  let result = ""

  if (L.length === 0 || M.length === 0) {
    return result
  }

  // 1.대문자 리스트 리스트업
  M.forEach(element => {
    tempObject[element] = 0
  });

  // 2.리스트업한 데이터 더히기
  L.forEach(element => {
    const nameAndValueArray = element.split(" ")
    const name = nameAndValueArray[0]
    const value = nameAndValueArray[1]
    const key = name.charAt(0)
    if (tempObject[key] !== undefined) {
      tempObject[key] = tempObject[key] + Number(value)
    }
  })

  // 3.데이터를 문자화하기
  M.forEach((element, index, array) => {
    result = result + `(${element} : ${tempObject[element]})`
    if (array[index + 1]) {
      result = result + " - "
    }
  })
  return result
}

const items = [
  {
    L: ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"],
    M: ["A", "B", "C", "W"]
  }, // => (A : 20) - (B : 114) - (C : 50) - (W : 0)
  {
    L: ["ABART 20", "ADXEF 0", "BKWRK 15", "BTSQZ 44", "DRTYM 2"],
    M: ["A", "B", "C", "D", "E", "W"]
  }, // => (A : 20) - (B : 59) - (C : 0) - (D : 2) - (E : 0) - (W : 0)
  {
    L: ["ABART 20", "ADXEF 0", "BKWRK 15", "BTSQZ 44", "DRTYM 2"],
    M: []
  }, // => ""
  {
    L: [],
    M: ["A", "B", "C", "D", "E", "W"]
  } // => ""
]
console.time("#1")
for (let item of items) {
  console.log(helpTheBookseller(item)
  );
}
console.timeEnd("#1")
