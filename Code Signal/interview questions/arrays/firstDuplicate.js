function firstDuplicate(a) {
//create an object
//loop through array and create a property for each index
//so you can solve with a nested loop easily
//search for duplicates
//then compare info about duplicates
//so we will need to store some info about them
//the number
//the index
let areThereAnyDuplicates = false;
const duplicateInfo = {};
for(let i=0; i<a.length;i++){
    if(!duplicateInfo[a[i]]){
        //throw it in with a high index 10000000
        duplicateInfo[a[i]]=10000000000;
    }
    else if(duplicateInfo[a[i]]){
        if(i<duplicateInfo[a[i]]){
            duplicateInfo[a[i]]=i;
            areThereAnyDuplicates=true;
        }
    }
    //if in the dupl info obhect, it does exist, throw in the new index only if it is lower
}
//

// for(let i=0; i<a.length;i++){
//     for(let b=i+1; b<a.length; b++){
//         if(a[i]===a[b]){
//             if(!duplicateInfo[a[i]]){
//                 duplicateInfo[a[i]]=b;
//             areThereAnyDuplicates = true;
//             }


//         }
//     }
// }
//
// console.log(duplicateInfo);
if(areThereAnyDuplicates===false){
    return -1;
}
let lowestIndex = 1000000000;
let lowestIndexNumber=null;
for( property in duplicateInfo){
    // console.log('before', lowestIndex);
    // console.log('before number', lowestIndexNumber);
    if(duplicateInfo[property]<lowestIndex){
        lowestIndex = duplicateInfo[property];
        lowestIndexNumber=property;
    }
    // console.log('after index', lowestIndex);
    // console.log('after number', lowestIndexNumber);
}
return parseInt(lowestIndexNumber);
}
