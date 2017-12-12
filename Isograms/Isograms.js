
//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.


function isIsogram(str){
  
  str = str.toLowerCase().split('').sort();
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      return false;
    }
  }
    return true;
}


//////////////////////////////////////////////////////////////


function isIsogram(str){

var lower = str.toLowerCase();
var count = [];
var passed = true;

for (var i = 0; i < str.length; i++) {
  var index = lower.charAt(i);
  
  if(count[index]) {
    count[index] = count[index] + 1;
  } else {
    count[index] = 1;
  }
  if( count[index] > 1 ) {
   
    return passed = false;
  } 
}
return passed;

}
isIsogram('aab');







/*

function isIsogram(str)  {
  // Downcase everything, split on letters.
  str_lc = str.toLowerCase();
  var letters = str_lc.split('');
  
  // Utility: checks whether the given "value" at "index" is actually
  // first encountered at this "index" position within a string ("self").
  // Expected to be used with Array#filter.
  var check4uniqueness = function(value, index, self) { 
    return self.indexOf(value) === index;
  }
  
  // An isogram string contains no duplicate, hence must have the same
  // length than the array composed of unique letters from that string.
  return letters.filter(check4uniqueness).length == str.length;
}









function isIsogram(str) {
  str = str.toLowerCase()
  
  for (var i = 0; i < str.length; i++) {
    if (str.indexOf(str.charAt(i), i + 1) >= 0) {
      return false
    }
  }
  
  return true
}







function isIsogram(str) {
  var map = {};
  var result = true;
  str.split('').forEach(function(char) {
    if (map[char.toUpperCase()] === undefined) {
      map[char.toUpperCase()] = 1;
    } else {
      result = false;
    }
  });
  return result;
}











function isIsogram(str){
  //Create array from string and make it uppercased
  var arr = str.split('').map(function(el) {
    return el.toUpperCase();
  }); 
  //Test each value for duplicates.
  return arr.every(function(el) {
    return arr.indexOf(el) == arr.lastIndexOf(el);
  });
}



















function isIsogram(str) {
  return !str || str.toLowerCase().split('').every(function(v, i, arr) {return arr.indexOf(v) == i;});
}




function isIsogram(str){
  return /^(?:([A-Za-z])(?!.*\1))*$/.test(str.toLowerCase());
}







function isIsogram (str) {
  return !str || (str.length === new Set(str.toLowerCase()).size);
}







function isIsogram(str){
  return !/(.).*?\1/i.test(str);
}









function isIsogram(word){
  word = word.toLowerCase().split("").sort();
  for (var i=0;i<word.length-1;i++){
    if (word[i]==word[i+1]) return false;
    }
  return true;
}










function isIsogram(str){
  
  for (var i = 0 ; i < str.length; i++)
    for (var j = i + 1 ; j < str.length; j++)
      if (str[i].toLowerCase() == str[j].toLowerCase())
        return false;
  
  return true;
}



*/