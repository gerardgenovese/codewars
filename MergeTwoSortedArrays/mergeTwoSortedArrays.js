/*
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

Example:

arr1 = [1,2,3,4,5];
arr2 = [6,7,8,9,10];
mergeArrays(arr1, arr2);  // [1,2,3,4,5,6,7,8,9,10];

arr3 = [1,3,5,7,9];
arr4 = [10,8,6,4,2];
mergeArrays(arr3, arr4);  // [1,2,3,4,5,6,7,8,9,10];

arr5 = [1,3,5,7,9,11,12];
arr6 = [1,2,3,4,5,10,12];
mergeArrays(arr5, arr6);  // [1,2,3,4,5,7,9,10,11,12];
*/


function mergeArrays(arr1, arr2) {
    var array = arr1.concat(arr2).sort((a, b) => {
        return a - b;
    });
  
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== array[i + 1]) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}




/*--------------Other Solutions---------------*/

function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
}

/*-------------------------------------------------*/

function mergeArrays(a, b) {
    return [...new Set(a.concat(b))].sort((a,b)=>a-b)
}

/*-------------------------------------------------*/

const mergeArrays = (a1, a2) => [...a1, ...a2].filter((v, i, a) => a.indexOf(v) === i).sort((a, b) => a - b);

/*-------------------------------------------------*/