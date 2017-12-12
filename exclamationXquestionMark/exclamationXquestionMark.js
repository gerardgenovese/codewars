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









function product(s){
var countp = 0;
var countq = 0;

  for( var i = 0; i < s.length; i++)
  if( s[i] === '!'){
    countp++;
  }
  for( var j = 0; j < s.length; j++)
  if(s[j] === '?') {
    countq++;   
  }
  return countp * countq  
}

product('???!!!');


//////////////////////////////////////////////////////////////////////////////////////////////////

function product(s){
  excs = s.split('!').length - 1
  ques = s.split('?').length - 1
  return excs * ques
}

//////////////////////////////////////////////////////////////////////////////////////////////////

function product(s){
  return (s.match(/!/g) == null || s.match(/\?/g) == null) ? 0 : s.match(/!/g).length * s.match(/\?/g).length;
}

//////////////////////////////////////////////////////////////////////////////////////////////////

function product(s){
  //coding and coding....
  var ques = 0;
  var excla = 0;
 
    s.split('').forEach(function(item){
      if (item === "!"){
        excla += 1;
      }
      if(item === "?"){
        ques += 1;
      }
      if(item === ""){
        return 0;
      }
    });
  
  return excla * ques;
}

//////////////////////////////////////////////////////////////////////////////////////////////////

function product(s) {
  return s.replace(/\?+/g, "").length * s.replace(/!+/g, "").length
}

//////////////////////////////////////////////////////////////////////////////////////////////////



function product(s){
  var first = 0;
  var second = 0;
  for(const elem of s){
    if(elem == '!'){
      first++;
    }
    else {
      second++;
    }
  }
  return first * second;
}

//////////////////////////////////////////////////////////////////////////////////////////////////



let product = (s) => s.replace(/[^!]/g, '').length * s.replace(/[^?]/g, '').length;

//////////////////////////////////////////////////////////////////////////////////////////////////


function product(s){
  var charCount = char => s.split('').filter(x => x == char).length;
  return charCount('?') * charCount('!');
}