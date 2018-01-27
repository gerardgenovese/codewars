/*
You will be given an array (a) and a value (x). 
All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either. 
Return true if the array contains the value, false if not.
*/

function check(a, x) {

  for (var i = 0; i < a.length; i++) {
    if (a[i] === x) {
      return true;
    }
  }
  return false;
}

/*===============================OTHER SOLUTIONS============================*/

const check = (a,x) => a.includes(x);

/*---------------------------------------------------*/

function check(a,x){
  return a.indexOf(x) > -1 ? true : false;
};

/*-----------------------------------------------------*/

const check = (array, value) => !!~array.indexOf(value);