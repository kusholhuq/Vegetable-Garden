// function fileNaming(names) {
// //create an object
// //if the string exists as a property of the object
// //create a new property which is that plus '(1)'
// //then after you've done that loop through and create an array with all prop names

// const hash = {};
// for(let i=0;i<names.length;i++){
//     if(hash[names[i]]===undefined){
//         hash[names[i]]=0;
//     }else{
//         hash[names[i]]++;
//         hash[names[i]+'('+hash[names[i]]+')']=0;
//     }
// }
// console.log(hash);
// const result=[];
// for(property in hash){
//     result.push(property);
// }
// return result;
// }
//my solution only solved 9/12 tests unfortunately.

function fileNaming(names) {
  for (i in names) {
    if (names.slice(0, i).includes(names[i])) {
      j = 1
      while (names.slice(0, i).includes(names[i] + "(" + j.toString() + ")")) { j++ }
      names[i] += "(" + j.toString() + ")"
    }
  }
  return names
}

    //the above solution works by
    //looping through the names array
    //if the file name is included from 0 until the name we're looking at
    //then set j = 1
    //while names includes the name in question between the first and current index, increase
    //the (j) value until it is no longer included
    //at that point set the value of the index of names in question to name(j)
