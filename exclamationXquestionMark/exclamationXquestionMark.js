//Exclamation marks series #13: Count the number of exclamation marks and question marks, return the product

function product(s){
  
  let ques = 0;
  let exc = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '?') {
      ques++
    } else if (s[i] === '!') {
        exc++
      }
  }
  return ques * exc;
}


//Code from other people


//////////////////////////////////////////////////////////////////////////////////////////////////

function product(s){
  return (s.match(/!/g) == null || s.match(/\?/g) == null) ? 0 : s.match(/!/g).length * s.match(/\?/g).length;
}


//////////////////////////////////////////////////////////////////////////////////////////////////

function product(s) {
  return s.replace(/\?+/g, "").length * s.replace(/!+/g, "").length
}


//////////////////////////////////////////////////////////////////////////////////////////////////


function product(s){
  var charCount = char => s.split('').filter(x => x == char).length;
  return charCount('?') * charCount('!');
}
