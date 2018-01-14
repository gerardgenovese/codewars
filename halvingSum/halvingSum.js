/*
Given a positive integer n, calculate the following sum: n + n/2 + n/4 + n/8 + .... 
All divisions are integer.

Example 
For n = 25, the output should be halvingSum(n) = 47.

The sum to be calculated is 25 + 12 + 6 + 3 + 1, which is 47.
*/

function halvingSum(n) {
    
    var sum = n;
    
    while (n > 1) {
        sum = sum + Math.floor((n / 2));
        n = (n / 2);
    }
    
    return sum;
}


/*--------------------Other Solutions-----------------*/


function halvingSum(n) {
    return n*2-eval([...n.toString(2)].join`+`)
}


/*-----------------------------------------------*/


function halvingSum(n) {
    return n < 1 ? 
      0 
      : 
      Math.floor(n) + halvingSum(n/2);
}


