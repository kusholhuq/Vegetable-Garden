function arrayChange(inputArray) {
  //questions i need to ask
  //is it increasing? is a less than b, is b less than c, is c less than d
  //when this is not the case, add to the next one
  //ie: is a less than b? no? add one to b, and add one to moves
  //you will have to keep running this loop until its done.
  //will need to global variables, one is moves, one is done
  //whenever a move is made, done is turned to false
  // at the beginning of a loop done is turned to true
  // let done=false;
  // let moves=0;
  // while(done===false){
  //     done=true;
  //     for (let k=0;k<inputArray.length;k++){
  //         if(inputArray[k]>=inputArray[k+1]){
  //             //might need ot add temp
  //             let temp=inputArray[k+1]+1;
  //             inputArray.splice(k+1,1,temp);
  //             moves++;
  //             done=false;
  //         }
  //     }
  // }
  // return moves;
  //too slow
  let count = 0;
  for (let k = 0; k < inputArray.length; k++) {
    if (inputArray[k] >= inputArray[k + 1]) {
      let difference = inputArray[k] + 1 - inputArray[k + 1];
      let newNumber = inputArray[k + 1] + difference;
      inputArray.splice(k + 1, 1, newNumber);
      count += difference;
    }
  }
  return count;
}
