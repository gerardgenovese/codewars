// Get the number n to return the reversed sequence from n to 1.

// Example : n=5 >> [5,4,3,2,1]

const reverseSeq = n => {

let arr = [];

for (let i = n; i > 0; i--) {
  arr.push(i);
}
return arr;

};



//Other solutions

const reverseSeq = length => Array.from({length}, () => length--)



//--------------------------------------------//



const reverseSeq = n => {
    return Array(n).fill(0).map((e, i) => n - i );
};



  //--------------------------------------------//



const reverseSeq = n => {
    return Array.from({length:n},(_,i)=>n-i);
};


//--------------------------------------------//



const reverseSeq = n =>
    Array(n)
    .fill(0)
    .map((_, i) => i + 1)
    .reverse()
    


 //--------------------------------------------//


    const reverseSeq = n => {
        if (n<2) return [n]
        return [n].concat(reverseSeq(n-1));
      };