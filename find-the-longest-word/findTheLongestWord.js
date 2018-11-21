module.exports = function findTheLongestWord(sen) {
    // This is to store the length of the longest word in array
    var longestLength = 0;
    // This is to store the longest word in the array
    var longestWord = '';
  
    //This for loop goes through the array to find a word longer than longestLength
    for (var i = 0; i < sen.length; i++) {
      if (sen[i].length > longestLength) {
        //This changes the longest word length if sen.length is greater
        longestLength = sen[i].length;
        //This changes the longestWord, to the actual longest word
        longestWord = sen[i];
      }
    }
    //Finally, returns the longest word
    return longestWord;
}

// let longestLength = 0;
//   let longestWord = '';

//   sen.map(word => {
//     if (word.length > longestLength) {
//       longestLength = word.length;
//       longestWord = word;
//     }
//   })
//   return longestWord;