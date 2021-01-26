// Complete the twoStrings function below.
function twoStrings(s1, s2) {
    //the only condition i need to check is that they contain at least one
    //of the same letters

    //loop through string 1
    //create an object for it
    //then loop through string 2
    //and check if a letter exists from the string exists in the object
        //if it does, return yes

    //return no
    const stringObject ={};
    for(let i=0; i<s1.length; i++){
        let letter = s1[i];
        if(!stringObject[letter]){
            stringObject[letter] = true;
        }
    }
    console.log(stringObject);

    for(let b=0; b<s2.length; b++){
        let letter = s2[b];
        if(stringObject[letter]){
            console.log("YES");
            return "YES";
        }
    }

    console.log("NO");
    return "NO";
}
