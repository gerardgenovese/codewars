/*

Very simple, given a number, find its opposite.

Examples:

1: -1
14: -14
-34: 34

*/


function opposite(number) {
  
    if (number > 0) {
      return -Math.abs(number);
    }
    return Math.abs(number);
}
  
  


//--------Other solutions--------------//

function opposite(number) {
    return(-number);
  }

//--------------------------------------------------//

function opposite(number) {
    return number * (-1);
}


//--------------------------------------------------//

const opposite = number => -number;


//--------------------------------------------------//

function opposite(number) {
    return number > 0 ? -number : Math.abs(number);
  }

