/*
In this Kata, you will be given a string and your task will be to return a 
list of ints detailing the count of uppercase letters, lowercase, numbers and 
special characters, as follows.

solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.
More examples in the test cases.

Good luck!
*/

function solve(s) {

    var upper = 0;
    var lower = 0;
    var num = 0;
    var special = 0;

    for (var i = 0; i < s.length; i++) {
        var unicodeNum = s.charCodeAt(i);

        if (unicodeNum >= 65 && unicodeNum <= 90) {
            upper++;
        } 
        else if (unicodeNum >= 97 && unicodeNum <= 122) {
            lower++;
        }
        else if (unicodeNum >= 48 && unicodeNum <= 57) {
            num++;
        }
        else if ((unicodeNum >= 33 && unicodeNum <= 47) || (unicodeNum >= 58 && unicodeNum <= 64)) {
            special++;
        }
        var final = [upper, lower, num, special];
    }
    return final;       
}


/*--------------------Other Solutions---------------------*/

const solve = (str) => (
    [/[A-Z]/, /[a-z]/, /\d/, /[\W]/].map(rgx => str.split(rgx).length - 1)
);


/*---------------------------------------------------------------*/

const solve = (string) => (
    Object.values([...string].reduce((acc, char) => {
      if (/[A-Z]/.test(char)) {
        acc.upper++;
      } else if (/[a-z]/.test(char)) {
        acc.lower++;
      } else if (/[0-9]/.test(char)) {
        acc.number++;
      } else {
        acc.other++;
      }
      return acc;
    }, { upper: 0, lower: 0, number: 0, other: 0 }))
);

/*---------------------------------------------------------------*/

const count = str => regex => str.split(regex).length - 1;
const solve = str => [/[A-Z]/, /[a-z]/, /\d/, /[\W]/].map(count(str));


/*-----------------------------------------------------------------*/

function solve(s){
    var arr =[];
    arr.push(s.split('').filter(val=>/[A-Z]/.test(val)).length);
    arr.push(s.split('').filter(val=>/[a-z]/.test(val)).length);
    arr.push(s.split('').filter(val=>/[0-9]/.test(val)).length);
    arr.push(s.split('').length-arr[0]-arr[1]-arr[2]);
    return arr;
}

/*-----------------------------------------------------------------*/


function solve(s){
    const mt = (str, reg) => {
      var r = str.match(new RegExp(reg, 'g'));
      return !!r ? r.length : 0; 
    }
    return [mt(s, '[A-Z]'), mt(s, '[a-z]'), mt(s, '[0-9]'), mt(s, '[^A-z0-9\s]')];
  }
