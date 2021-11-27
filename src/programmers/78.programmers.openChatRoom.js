//문제: https://programmers.co.kr/learn/courses/30/lessons/42888

function openChatRoom (record) {
  const answer = []
  const tempNameObject = {}
  const actionNameObject = {
    "Enter": "님이 들어왔습니다.",
    "Leave": "님이 나갔습니다.",
  }
  for (let i = 0; i < record.length; i++) {
    const history = record[i]
    let splitedHistory = history.split(" ")
    let userUid = splitedHistory[1]
    let userName = splitedHistory[2]
    let actionName = actionNameObject[splitedHistory[0]]
    if (userName) {
      tempNameObject[userUid] = userName
    }
    if (actionName) {
      answer.push([userUid, actionName])
    }
  }
  return answer.map(item => tempNameObject[item[0]] + item[1])
}


const items = [
  ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"] // =>	["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

]
console.time("#1")
for (let item of items) {
  console.log(openChatRoom(item)
  );
}
console.timeEnd("#1")
