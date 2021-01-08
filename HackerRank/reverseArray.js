function reverseArray(a) {
    //take each item and push into a new array
    const result =[];
    for (let i=0; i<a.length; i++){
        result.unshift(a[i]);
    }
    return result;
    
    }