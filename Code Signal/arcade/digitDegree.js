function digitDegree(n) {
    let numberString = n+"";
    let numberTotal = 0;
    let times = 0;
    while(true){
        if(numberString.length>1){
            numberTotal = 0;
            for(let i=0; i<numberString.length;i++){
                numberTotal+=parseInt(numberString[i]);
            }
            times++;
            numberString = numberTotal+"";
        }
        if(numberString.length<=1){
            return times;
        }
    }
}
