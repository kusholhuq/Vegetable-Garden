function isIPv4Address(inputString){
//loop through string
//create a dot count
//separeate at leach decimal point into distinct strings
//store each in a variable
//check if each is in the range

let dotCount=0;
let one='';
let two='';
let three='';
let four='';


for(let i=0; i<inputString.length;i++){
   if(inputString[i]==='.'){
       dotCount++;
   }else if(inputString[i]!=="1" && inputString[i]!=="2" && inputString[i]!=="3" && inputString[i]!=="4" && inputString[i]!=="5" && inputString[i]!=="6" && inputString[i]!=="7" && inputString[i]!=="8" && inputString[i]!=="9" && inputString[i]!=="0"){
       console.log(i);
       console.log('here');
       return false;
   }
   else{
    switch(dotCount){
        case 0:
            one = one+inputString[i];
            break;
        case 1:
            two = two+inputString[i];
            break;
        case 2:
            three = three+inputString[i];
            break;
        case 3:
            four = four+inputString[i];
    }
   }
}
   console.log('one:', one, 'two:', two, 'three:', three, 'four:', four)
   if (!one || !two || !three || !four){
       return false;
   }
   const numberArray = [parseInt(one),parseInt(two),parseInt(three),parseInt(four)];
   console.log('parsed:',numberArray);
   for(let k=0;k<numberArray.length;k++){
       if(numberArray[k]<0 || numberArray[k]>255){
           return false;
       }

   }
   const stringArray=[one, two, three, four];
   for(let h=0; h<stringArray.length; h++){
       if (stringArray[h][0]==='0'&&stringArray[h].length>1){
           console.log('leading zero');
           return false;
       }
   }
   if(dotCount>3){
       return false;
   }
   return true;
}
