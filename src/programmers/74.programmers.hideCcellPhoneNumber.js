//문제: https://programmers.co.kr/learn/courses/30/lessons/12948

function hideCcellPhoneNumber (phone_number) {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(phone_number.length - 4)
}


const items = [
  "01033334444", // =>	"*******4444"
  "027778888", // =>	"*****8888"


]
console.time("#1")
for (let item of items) {
  console.log(hideCcellPhoneNumber(item)
  );
}
console.timeEnd("#1")
