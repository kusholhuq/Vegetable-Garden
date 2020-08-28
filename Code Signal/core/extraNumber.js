function extraNumber(a, b, c) {
let total=a+b+c;
if(a===c){
    return total - a - c;
}
if(a===b){
    return total-a-b;
}
if(b===c){
    return total-b-c;
}

//you neeed a system of equations
//a+b+c=total
//then determine which one is the duplicate
//when you know which 2 are duplicates, subtract them from the total
//to find duplicates you must subtract their absolute values
//the issue is if they are positive and negative version of eachother

}
