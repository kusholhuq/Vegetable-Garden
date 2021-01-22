function repeatedString(s, n) {
//so given a pattern
//find how many times a occurs
//if that pattern repeats until n characters are present

//loop through the pattern
//n counter reaches N
//index counter that resets to 0 when it reaches the length-1
//A counter counts
// let aCounter = 0;
// let counter = 0;
// let currentIndex = 0;
// while(counter < n){
//     if(currentIndex===s.length){
//         currentIndex = 0;
//     }
//     if(s[currentIndex]==="a"){
//         aCounter++;
//     }
//     currentIndex++;
//     counter++;
// }
// return aCounter;

//how about instead of looping forever
//find it for 1 pattern
//divide n by the length of the pattern
//multiply

let aCount = 0;
for(let i=0; i<s.length; i++){
    if(s[i]==="a"){
        aCount++;
    }
}
//thats it for one run
let numberOfRepeats = Math.floor(n/(s.length));
//lets find remainder
let remainder = n%s.length;
let aInRemainder = 0;
for(let b=0; b<remainder; b++){
    if(s[b]==="a"){
        aInRemainder++;
    }
}

let total = (aCount*numberOfRepeats)+aInRemainder;
return total;
}
