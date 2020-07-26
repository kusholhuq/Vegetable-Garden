function arrayMaxConsecutiveSum(inputArray, k) {
//you have to look at each item,
//then look at each item a certain number in front of that item
//sum through those
//once you acquire that particular sum
//compare to the highest sum you've found, and replace it if its the highest

let max = null;

for(let i=0; i<inputArray.length ; i++){
    let currentSum=null;
    for(let g=i; g<k+i; g++){
        currentSum+=inputArray[g];
    }
    if(currentSum>max){
        max = currentSum;
    }
}
    return max;
}

//only passed 19/20 tests, does not work for incredibly large arrays
