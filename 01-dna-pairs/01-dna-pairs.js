/*

Create a function that takes a string of DNA and matches each base with its pair, returning a nested array. In DNA, C pairs with G, and T pairs with A.

Examples:

dnaPair("G");
should return --> [ ["G", "C"] ]

dnaPair("AG");
should return --> [ ["A", "T"], ["G", "C"] ]

dnaPair("ATAG");
should return --> [ ["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"] ]

*/

// Please do not change the name of this function
function dnaPairs(dna) {
  dnaPairsArr = [];

  // if the dna string is empty, or if it has characters other than the possible ones, return an empty array
  if (!dna.length || /[^agtc]/gi.test(dna)) return dnaPairsArr;

  // create variables to store pairs
  gPair = ["G", "C"];
  cPair = ["C", "G"];
  aPair = ["A", "T"];
  tPair = ["T", "A"];

  // turn dna string into an array using split("")
  const dnaArr = dna.toUpperCase().split("");

  // use forEach() to iterate through array and add pairs to final array
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
