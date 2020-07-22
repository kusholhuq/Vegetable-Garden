function stringsRearrangement(inputArray) {

//lets just look at the first one, and compare it to each string in the array
//we will count how many differences it has from each subsequent string
let countOfNumberOfElementsItsDifferentFrom=0;
for(let i=1; i<inputArray.length;i++){

    let countOfDifferencesFromParticularElement = 0;

    for(let k=0; k<inputArray[i].length; k++){

        if(inputArray[0][k]!==inputArray[i][k]){
            countOfDifferencesFromParticularElement++;
        }

    }

    if(countOfDifferencesFromParticularElement>=inputArray.length){
        return false;
    }

    if(countOfDifferencesFromParticularElement>=2){
        countOfNumberOfElementsItsDifferentFrom++;
    }
    if(countOfDifferencesFromParticularElement===0){
        return false;
    }
    if (countOfNumberOfElementsItsDifferentFrom>=inputArray.length-1){
        return false;
    }
    }
    return true;
}
