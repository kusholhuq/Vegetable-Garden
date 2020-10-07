function rotateImage(a) {
    console.log(a);
    //so lets try and transpose it and see where that gets us
    for(let row=0; row<a.length; row++){
        for (let column=0; column<row; column++){
            const temp = a[row][column];
            a[row][column]=a[column][row];
            a[column][row]=temp;
        }
    }
    a.map(function(row){row.reverse()});
    console.log(a);
    return a;
}
