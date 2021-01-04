// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
    //loop through the whole array
        //loop again and compare the looped number to the next one
        //if they add up to a number divisible by k push the pair to an array
        //return the length of the array
    
    const pairs =[];
    
    for(let i = 0 ; i<ar.length; i++){
        for(let b=i+1; b<ar.length; b++){
            if((ar[i]+ar[b])%k===0){
                pairs.push([ar[i],ar[b]]);
            }
        }
    }
    
    return pairs.length;

}