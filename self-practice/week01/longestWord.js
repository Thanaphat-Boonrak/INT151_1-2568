function longestWord(sentence) {
  if (typeof sentence !== "string") return "";
  const splitSentence = sentence.split(" ");
  return splitSentence.reduce(
    (temp, word) => (word.length > temp.length ? word : temp),
    ""
  );

}
module.exports = longestWord;
