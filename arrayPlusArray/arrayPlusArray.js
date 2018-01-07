/*
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. 
I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/


function arrayPlusArray(arr1, arr2) {
  var numbers = arr1.concat(arr2);
  var sum = 0;
  
  for (var i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  
  return sum;
}
arrayPlusArray([-1, -2, -3], [-4, -5, -6])

/*refactor*/

function arrayPlusArray(arr1, arr2) {
    var numbers = arr1.concat(arr2);
    var sum = 0;
  
    return numbers.reduce(function(sum, number) {
    return sum + number;
    }, 0);
 
}

/*refactor*/

function arrayPlusArray(arr1, arr2) {
    var numbers = arr1.concat(arr2);

    return numbers.reduce(function(sum, number) {
    return sum + number;
    }, 0);
    
  }

/*refactor*/

function arrayPlusArray(arr1, arr2) {
    var numbers = arr1.concat(arr2).reduce((sum, number) =>{
        return sum + number;
    },0);

    return numbers;

}

/*refactor*/

function arrayPlusArray(arr1, arr2) {
    var numbers = arr1.concat(arr2).reduce((sum, number) => sum + number, 0);

    return numbers;

}


/*----------Other Solutions---------------*/

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

/*----------------------------------------------------------*/

// accepts indefinite number of arrays
function arrayPlusArray(...arrays) {
    return [].concat(...arrays).reduce((a,b) => a+b,0)
}

/*----------------------------------------------------------*/

function arrayPlusArray(arr1, arr2) {
    var join = arr1.concat(arr2);
  
    function getSum(a,b) {
      return a+b;
    }
      return join.reduce(getSum);
}