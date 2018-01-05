/*
Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. 
His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer 
Philip's endless questions.

Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. 
As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, 
	so your function needs to work with both dates in the future and in the past.

Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: 
	"You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"

"..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account 
for both "year" and "years", depending on the result.
*/
// Good Luck!

function  calculateAge(yearBorn, yearCompared) {
  
	if (yearCompared - yearBorn < -1) {
   return "You will be born in " + (yearBorn - yearCompared) + " years.";
  }
  
  else if (yearCompared - yearBorn === -1) {
   return "You will be born in 1 year."; 
  }
  
  else if (yearBorn - yearCompared === 0) {
   return "You were born this very year!"; 
  }
  
  else if ( yearCompared - yearBorn === 1) {
   return "You are 1 year old."; 
  }
  
  else if (yearCompared - yearBorn < 1) {
   return "You are " + (yearCompared - yearBorn) + " years old."; 
  }
  
  else {
   return "You are " + (yearCompared - yearBorn) + " years old."; 
  } 
    
}
  
calculateAge(1981, 2000);


/////////////////////////////////

function  calculateAge(m, n) {
  if(m == n) return 'You were born this very year!';
  var year = Math.abs(m-n) == 1 ? 'year' : 'years';
  if(m < n) return "You are "+(n-m)+' '+year+' old.';
  if(m > n) return "You will be born in "+(-n+m)+' '+year+'.';
}

//////////////////////////////////////////////////////////


function  calculateAge(y1,y2) {
  var dif = y2 - y1;
  var s = Math.abs(dif) === 1 ? "" : "s";
  return dif > 0 ? `You are ${dif} year${s} old.` : ( dif < 0 ? `You will be born in ${Math.abs(dif)} year${s}.` : `You were born this very year!`);
}

///////////////////////////////////////////////////////////

function  calculateAge(a,b) {
  return a>b?`You will be born in ${a-b} year${a-b==1?"":"s"}.`:
         a<b?`You are ${b-a} year${b-a==1?"":"s"} old.`:
         `You were born this very year!`
}

//////////////////////////////////////////////////

var  calculateAge=(b,c)=>{
  r = c-b;
  switch(true) {
    case (r>1):    return "You are " + r + " years old."; break;
    case (r===1):  return "You are 1 year old."; break;
    case (r===0):  return "You were born this very year!"; break;
    case (r===-1): return "You will be born in 1 year."; break;
    case (r<-1):   return "You will be born in " + (-r) + " years."; break;
  }
}

///////////////////////////////////////////////

const calculateAge = (a, b) => 'You ' + (a == b ? 'were born this very year!' : a > b ? `will be born in ${a - b} year${a - b != 1 ? 's' : ''}.`: `are ${b - a} year${b - a != 1 ? 's' : ''} old.`);

////////////////////////////////////////

function  calculateAge(birthYear,year) {
   age = year-birthYear;
   if(age==1)
     return "You are 1 year old.";
   else if(age===-1)
     return "You will be born in 1 year."
   else if(age>0)
     return "You are " + age + " years old.";
   else if(age<0) {
     age = birthYear-year;
     return  "You will be born in " + age + " years."
   }
   else {
     return "You were born this very year!";
   }
}
