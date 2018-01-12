/*
Our task is to find the minimum sum which is obtained from summing each Two integers product.

minSum({5,4,2,3}) // return 22 

Explanation :: 
5*2 +3*4 = 22

minSum({12,6,10,26,3,24}) // return 342

Explanation ::
26*3 + 24*6 + 12*10 = 342

minSum({9,2,8,7,5,4,0,6}) // return 74

Explanation ::
9*0 + 8*2 +7*4 +6*5 = 74
Note : 

1- Natural numbers only passed to the vector (No  Negatives) .
*/

function minSum(arr) {
 
    var smallHalf = arr.sort((a,b)=>{
        return a - b;
    });

    var spliceSecondHalf = smallHalf.splice(0, smallHalf.length / 2);

    var largeHalf = spliceSecondHalf.sort((a,b)=>{
        return b - a;
    });
    
    var small = 0;
    var large = 0;
    var total = 0;

    var i = 0;

    while(i < arr.length) {
       small = smallHalf.splice(0,1);
       large = largeHalf.splice(0,1);
        total = total + (small * large);
    }

    return total;

}

/*----------------------------------Other Solutions------------------------------------*/

function minSum(a) {
    return function minSum(a) {
      return a.length && a.shift() * a.pop() + minSum(a) ;
    } ( a.sort( (v,w) => v-w ) ) ;
}

/*-------------------------------------------------------------------------------------*/

function minSum(arr) {
    arr.sort(function(a, b){return a-b});
    console.log(arr)
    var sum = 0
    
    var i=0; var j = arr.length - 1
    while(i<j){
      var x= arr[i] * arr[j]
      sum = sum + x
      i++
      j--
    }
    return sum
}
  
/*-------------------------------------------------------------------------------------*/

const minSum = (arr) => arr.sort((a,b)=>a-b).splice(0,arr.length/2).sort((a,b)=>b-a).reduce((p,v,i)=> p+v*arr[i],0);

