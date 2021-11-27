//문제: https://im-developer.tistory.com/55?category=831367

function humanReadableTime (seconds) {
  let hour = parseInt(seconds / 3600).toString().padStart(2, "0")
  let minute = parseInt((seconds % 3600) / 60).toString().padStart(2, "0")
  let second = parseInt(seconds % 60).toString().padStart(2, "0")
  return `${hour}:${minute}:${second}`
}

const items = [
  359999, // => "99:59:59"
  3600, // => "01:00:00"
]
console.time("#1")
for (let item of items) {
  console.log(humanReadableTime(item)
  );
}
console.timeEnd("#1")
