function countingValleys(steps, path) {
    // Write your code here
    //how many valleys do we go through
    //we need to recognize when we start going into a valley
    //and when we exit
    //so we can have a altitude counter
    //when its positive whwatever
    //when it dips negative we add to the valley counter
    //anytime altitude goes from 0 to negative
    // we could create an altitude array
    //and compare the current to the previous
    //if the last was 0 and the current is negative thats a valley count

    let valleyCounter = 0;
    let altitude = 0;
    let altArray = [0]

    for(let i = 0; i<path.length ;i++){
        if(path[i]==="D"){
            altitude--;
        }
        if(path[i]==="U"){
            altitude++;
        }
        altArray.push(altitude);
        if(altArray[i-1]===0 && altArray[i]===-1){
            valleyCounter++;
        }
    }
    return valleyCounter;
}
