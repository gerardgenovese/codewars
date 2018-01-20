/*
A western man is tring to find gold in a river. 
To do that, he passes a bucket through the river's soil and then checks if it contains any gold. 
However, he could be more productive if he wrote an algorithm to do the job for him.

So, you need to check if there is gold in the bucket, and if so, return True/true. 
If not, return False/false.
*/

function checkTheBucket(bucket){

    for (var i = 0; i < bucket.length; i++) {
        if (bucket[i] === 'gold') {
            return true;
        }  
    }
    return false;
}


//-------------------------OTHER SOLUTIONS-------------------------------//

function checkTheBucket(bucket){
    return bucket.includes('gold');
}

//===========================================================================//

function checkTheBucket(bucket){
    return bucket.some(n => n === "gold");
}

//===========================================================================//

const checkTheBucket = (bucket) => bucket.some(x => x === 'gold');

//===========================================================================//

function checkTheBucket(bucket){
    return bucket.includes('gold') ? true : false;
}