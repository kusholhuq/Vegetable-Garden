function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
let goodArm1;
let goodArm2;
let strongestArm;
let totalEqual;
if(yourLeft>=yourRight){
    goodArm1=yourLeft;
}
if(yourRight>=yourLeft){
    goodArm1=yourRight;
}

if(friendsLeft>=friendsRight){
    goodArm2=friendsLeft;
}
if(friendsRight>=friendsLeft){
    goodArm2=friendsRight;
}
console.log('1:', goodArm1, '2:', goodArm2);
if(goodArm1===goodArm2){
    strongestArm=true;
}

if(yourRight+yourLeft===friendsRight+friendsLeft){
    totalEqual=true;
}
if(strongestArm && totalEqual){
    return true;
}
return false;


//two things need to be true
//total weight must be equal
//and strongest arm must be equal
}
