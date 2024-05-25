const reverseString = function(word) {
  let wordSplit = word.split("");
  let wordReverse = wordSplit.reverse();
  let wordReversed = wordReverse.join("");
  return wordReversed;    // you can easily do this { return word.split("").reverse("").join(""); }
};

// Do not edit below this line
module.exports = reverseString;
