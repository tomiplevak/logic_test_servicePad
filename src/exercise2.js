function countRepeatedWords(sentence) {
  let words = sentence.toLowerCase().replace(/[,.!?]/g,"").split(" ");
  let wordMap = {};

  for (let i = 0; i < words.length; i++) {
    let currentWordCount = wordMap[words[i]];
    let count = currentWordCount ? currentWordCount : 0;
    wordMap[words[i]] = count + 1;
  }
  return wordMap;
}

module.exports = countRepeatedWords;