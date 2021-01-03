// Complete the birthday function below.
function birthday(s, d, m) {
    //d is the goal number
    //m is the number of integers in a chunk
    //s is the array
    
    //loop through the array
    //for each iteration add the one in question and the rest of the chunk together
    //if the chunk adds to d
    //add to the pass count
    
    let count = 0;
    
    
    for(let i=0; i<s.length; i++){
        let chunk=s[i]
        for(let k=i+1; k<m+i; k++){
            chunk+=s[k];
        }
        if(chunk===d){
            count++;
        }
    }
    return count;
    }