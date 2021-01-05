// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {


    //before 1917 we use divisible by 4
    if (year<1918){
        if(year%4===0){
            return '12.09.'+year;
        }
    }
    //1918 we lose 13 days so date is 31.8.1918
    if(year===1918){
        return '26.09.1918';
    }
    //1919 onwards we use divisible by 400, divisible by 4 and not 100
    if(year>1918){
        if(year%400===0){
        return '12.09.'+year;
        } else if(year%4===0 && year%100!==0){
        return '12.09.'+year;
        }
        else{
        return '13.09.'+year;
        }
    }
    else {
        return '13.09.'+year;
    }
    }