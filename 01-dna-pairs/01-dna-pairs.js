/*

Create a function that takes a string of DNA and matches each base with its pair, returning a nested array. In DNA, C pairs with G, and T pairs with A.

*/

function dnaPairs(dna) {
  dnaPairsArr = [];

  if (!dna.length || /[^agtc]/gi.test(dna)) return dnaPairsArr;

  gPair = ["G", "C"];
  cPair = ["C", "G"];
  aPair = ["A", "T"];
  tPair = ["T", "A"];

  const dnaArr = dna.toUpperCase().split("");

  dnaArr.forEach((letter) => {
    if (letter === "G") {
      dnaPairsArr.push(gPair);
    } else if (letter === "A") {
      dnaPairsArr.push(aPair);
    } else if (letter === "T") {
      dnaPairsArr.push(tPair);
    } else if (letter === "C") {
      dnaPairsArr.push(cPair);
    }
  });
  
  return dnaPairsArr;
};

module.exports = dnaPairs;
