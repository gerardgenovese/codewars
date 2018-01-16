/*
Write an algorithm that takes an array and moves all of the zeros to the end, 
preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/


var moveZeros = function (arr) {
        
    var newArr = [];
    var holdZeros = [];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        holdZeros.push(arr[i]); 
    } else {
        newArr.push(arr[i]);
    }
}
return newArr.concat(holdZeros);
}



/*---------------------------Other Solutions----------------------------------------*/
var moveZeros = function (arr) {
    var filtedList = arr.filter(function (num){return num !== 0;});
    var zeroList = arr.filter(function (num){return num === 0;});
    return filtedList.concat(zeroList);
}

/*------------------------------------------------------------------------------------------*/
var moveZeros = function (arr) {
    return arr
      .filter((val) => val !== 0)
      .concat(arr.filter((val) => val === 0));
}



/*------------------------------------------------------------------------------------------*/

let moveZeros = (arr) => arr.filter(i => i !== 0).concat(arr.filter(i => i === 0));

