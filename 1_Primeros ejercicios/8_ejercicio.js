const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList){
  let longestWord = "";
  for (const string of stringList){
    if(string.length > longestWord.length){
      longestWord = string;
    }
  }
  return longestWord
}
console.log(findLongestWord(avengers));