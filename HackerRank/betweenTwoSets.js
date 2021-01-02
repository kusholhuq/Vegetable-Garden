//what integers do 2 and 6 have in common

//which of those integers factor in to each thing from the second array

//so lets find integers all elements in the first array have in common

//if i loop from the highest number in arr1 to the lowest number in the arr2
//this is my selection
//check if each one is divisible with no remainder by each element of arr1
    //if it is divisible with no remainder by every element, you can push it to an array
    //if it it not divisible by even one of them, then skip and move onto the next integer

//now we are on phase 2
//loop through the array we created
//checking if each is a factor of each item in arr2
    //if it is divisible with no remainder by every element, you can push it to a new array
    //if it it not divisible by even one of them, then skip and move onto the next integer

//return the length of this new array

function getTotalX(a, b) {
    // Write your code here
    const sortedA = a.sort();
    const sortedB = b.sort();
    
    const phase1 = [];
    let pass = true;
    
    for(let i=sortedA[a.length-1]; i<=sortedB[0]; i++){
        pass = true;
        console.log("i", i)
        for(let k=0; k<sortedA.length; k++){
            if(i%sortedA[k]!==0){
                pass = false;
                break;
            }
        }
        if(pass === true){
            phase1.push(i);
        }
    }
    
    const phase2=[];
    
    for(let g=0; g<phase1.length; g++){
        pass = true;
        console.log("phase1[g]",phase1[g] )
        for(let h=0;h<sortedB.length; h++){
            if(sortedB[h]%phase1[g]!==0){
                pass = false;
                break;
            }
        }
        if(pass === true){
            phase2.push(phase1[g]);
        }
    }
    console.log(sortedA, sortedB);
    console.log("phase1", phase1, "phase2", phase2);
    return phase2.length;
}