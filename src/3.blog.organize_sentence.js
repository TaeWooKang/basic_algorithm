//문제: https://im-developer.tistory.com/25?category=831367
function organizeSentence({ sentence, replaceWord }) {
  let results = "";
  let words = [];
  if (sentence.indexOf(replaceWord) > -1) {
    words = sentence.split(replaceWord);
  } else {
    words = sentence.split(" ");
  }
  words.forEach((element) => {
    if (element) {
      results = results + " " + element;
    }
  });
  if (results.length > 0) {
    results = results.slice(1, results.length);
  }

  return results;
}

let sentences = ["AWUBBWUBC", "AWUBWUBWUBBWUBWUBWUBC", "WUBAWUBBWUBCWUB", "IWUBLOVEWUBDOGWUBWUB!!", "MULTI    SPACING     SENTENCE"];
for (let i in sentences) {
  let sentence = sentences[i];
  let result = organizeSentence({
    sentence: sentence,
    replaceWord: "WUB",
  });
  console.log({ result });
}
