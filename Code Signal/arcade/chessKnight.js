function chessKnight(cell) {

const alphaObj = {
    'a':1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6, 'g':7, 'h':8
}


let options = 0;
const letter=cell[0];
const cellNumber = parseInt(cell[1]);
//right top
if(alphaObj[letter]+2<9 && alphaObj[letter]+2>0 && cellNumber + 1>0 && cellNumber + 1<9){
    options++;
}

if(alphaObj[letter]+1<9 && alphaObj[letter]+1>0 && cellNumber + 2>0 && cellNumber + 2<9){
    options++;
}


//right bot

if(alphaObj[letter]+2<9 && alphaObj[letter]+2>0 && cellNumber -1>0 && cellNumber -1<9){
    options++;
}
if(alphaObj[letter]+1<9 && alphaObj[letter]+1>0 && cellNumber -2>0 && cellNumber -2<9){
    options++;
}



//left top
if(alphaObj[letter]-2<9 && alphaObj[letter]-2>0 && cellNumber +1>0 && cellNumber +1<9){
    options++;
}
if(alphaObj[letter]-1<9 && alphaObj[letter]-1>0 && cellNumber +2>0 && cellNumber +2<9){
    options++;
}


//left bot
if(alphaObj[letter]-2<9 && alphaObj[letter]-2>0 && cellNumber -1>0 && cellNumber -1<9){
    options++;
}
if(alphaObj[letter]-1<9 && alphaObj[letter]-1>0 && cellNumber -2>0 && cellNumber -2<9){
    options++;
}


//so lets separate the given cell,
//convert letter to a number, then make every permutation of it and add a counter for each one that exists in the array

return options;
}
