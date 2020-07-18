function chessBoardCellColor(cell1, cell2) {
//two cells
//find cell1 value
//  find letter 1 value
    //convert it to a number, and get an even or odd value
//  find number 1 value
    //convert it to even or odd

//multiply values together to get overall cell1 value
//repeat for cell2value
let firstCellEvenOrOdd = '';

let letter1 = cell1[0];
let number1 = parseInt(cell1[1]);
let letter1EvenOrOdd='';
let number1EvenOrOdd = '';

let secondCellEvenOrOdd = '';

let letter2 = cell2[0];
let number2 = parseInt(cell2[1]);
let letter2EvenOrOdd='';
let number2EvenOrOdd = '';

const alpha = 'ABCDEFGH';

for(let i=0;i<alpha.length;i++){
    if(letter1 ===alpha[i]){
        if((i+1)%2===0){
            letter1EvenOrOdd='even';
        }
        else{
            letter1EvenOrOdd='odd'
        }
    }
    if(letter2===alpha[i]){
         if((i+1)%2===0){
            letter2EvenOrOdd='even';
        }
        else{
            letter2EvenOrOdd='odd'
        }
    }
}

console.log('letter1, letter2', letter1, letter2);
console.log('letter1even or odd, letter two even or odd', letter1EvenOrOdd, letter2EvenOrOdd);

if(number1%2===0){
    number1EvenOrOdd='even';
} else if(number1%2!==0){
    number1EvenOrOdd='odd'
}

if(number2%2===0){
    number2EvenOrOdd='even';
} else if(number2%2!==0){
    number2EvenOrOdd='odd'
}

console.log('number1, evenOrOdd, number2, even or odd', number1, number1EvenOrOdd, number2, number2EvenOrOdd);

if(number1EvenOrOdd === 'even'&& letter1EvenOrOdd==='even'){
    firstCellEvenOrOdd='even';
} else if(number1EvenOrOdd=== 'even' && letter1EvenOrOdd==='odd'){
    firstCellEvenOrOdd='odd';
} else if(number1EvenOrOdd==='odd' && letter1EvenOrOdd==='odd'){
    firstCellEvenOrOdd='even';
}else if(number1EvenOrOdd==='odd' && letter1EvenOrOdd==='even'){
    firstCellEvenOrOdd='odd';
}

if(number2EvenOrOdd === 'even'&& letter2EvenOrOdd==='even'){
    secondCellEvenOrOdd='even';
} else if(number2EvenOrOdd=== 'even' && letter2EvenOrOdd==='odd'){
    secondCellEvenOrOdd='odd';
} else if(number2EvenOrOdd==='odd' && letter2EvenOrOdd==='odd'){
    secondCellEvenOrOdd='even';
}else if(number2EvenOrOdd==='odd' && letter2EvenOrOdd==='even'){
    secondCellEvenOrOdd='odd';
}

console.log('firstCell, secondcell', firstCellEvenOrOdd, secondCellEvenOrOdd);

if(firstCellEvenOrOdd===secondCellEvenOrOdd){
    return true;
}else{
    return false;
}

}
