//문제: https://im-developer.tistory.com/50?category=831367

function convertPascalCaseStringIntoSnakeCase (sentence) {
  let answer = ""

  for (let i = 0; i < sentence.length; i++) {
    let charCode = sentence.charCodeAt(i)

    if (charCode > 58 && charCode < 97) {
      if (i !== 0) {
        answer += "_"
      }
      charCode = charCode + 32
    }
    answer += String.fromCharCode(charCode)
  }

  return answer
}

const items = [
  "TestController",// => test_controller
  "MoviesAndBooks", // => movies_and_books
  "App7Test", // => app7_test
  "1" // => "1"
]
console.time("#1")
for (let item of items) {
  console.log(convertPascalCaseStringIntoSnakeCase(item)
  );
}
console.timeEnd("#1")
