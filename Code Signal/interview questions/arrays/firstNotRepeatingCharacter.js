function firstNotRepeatingCharacter(s) {
//loop through string and create an object
//count how many of each letter exists in the string
//if all properties are greater than 1 return '_'
//then find each of the letters that appear only once and put them into an array
//then loop through the string again to see which one appears first
//find the one with the lowest index, and then return string at that index
const letterCount = {};
for(let i=0; i<s.length; i++){
    if(!letterCount[s[i]]){
        letterCount[s[i]]=1;
    }else if(letterCount[s[i]]){
        letterCount[s[i]]+=1;
    }
}
console.log(letterCount);

//my fail catcher
//does 1 exist
let does1exist = false;
const arrayOf1 =[];
for(property in letterCount){
    if(letterCount[property]===1){
        does1exist = true;
        arrayOf1.push(property);
    }
}
if(does1exist===false){
    return '_';
}
console.log(arrayOf1);
let lowestIndex = 10000000;
for(let k=0; k<arrayOf1.length; k++){
    for(let b=0; b <s.length; b++){
        if(arrayOf1[k]===s[b]){
            if(b<lowestIndex){
                lowestIndex=b;
            }
        }
    }
}
return s[lowestIndex];
}
