/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Example:

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
*/

function makeNegative(num) {
  if (num < 0){
      return num;
  }
  else if (num === 0) {
      return 0;
  }
  else {
      num = num - (num + num);
  }
  return num;
}



//Other Solutions

function makeNegative(num) {
    return -Math.abs(num);
}

/*-------------------------------------------------*/

function makeNegative(num) {
    return num < 0 ? num : -num;
}

/*-------------------------------------------------*/

makeNegative = n => -Math.abs(n)

/*-------------------------------------------------*/

function makeNegative(num) {
    return num < 1 ? num : -1 * num;
}

/*-------------------------------------------------*/




