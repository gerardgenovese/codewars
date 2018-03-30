/*
Write a function longest() that takes one argument, a list of words, 
and returns the length of the longest word in the list.

For example:

>>> words = ['simple', 'is', 'better', 'than', 'complex']
>>> longest(words)
7
*/

function longest(words) {
  
  let longestWord = 0;
  
  words.map(long => {
    if (long.length > longestWord) {
      longestWord = long.length
    }
  });
  return longestWord
}




//////////////////////////OTHER SOLUTIONS////////////////////////////////

const longest = words => words.reduce((a, word) => Math.max(a, word.length), 0);

//----------------------//

const longest = words => Math.max(...words.map(x => x.length))

