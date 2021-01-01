function kangaroo(x1, v1, x2, v2) {
    // Complete the kangaroo function below.
    
        //compare initial values
        //add the rates to each position
        //compare the values
        //repeat this adding and comparing
        //until they match, or x1 overtakes x2
        //so when x1 becomes bigger than x2 we stop looping
        let currentX1 = x1;
        let currentX2 = x2;
        if(currentX1===currentX2){
            "YES";
        }
        if(v1<=v2){
            return "NO";
        }
        while(currentX1<currentX2){
            currentX1+=v1;
            currentX2+=v2;
            if(currentX1===currentX2){
                return "YES";
            }
        }
        return "NO";
    
    }
    