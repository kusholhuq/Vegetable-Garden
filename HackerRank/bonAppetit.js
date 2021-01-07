// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
    //bill is an array of prices
    //k is the index that girl doesnt eat
    //b is how much anna paid
    //we must determine how much money brian owes anna
    
    //so lets sum the total bill
    //lets subtract price of anna's items
    //divide that by 2
    //now you have the price they each should pay
    //check if anna is paying the right amount
    //how much was anna supposed to pay minus how much she paid
    //b charged - b actual
    
    //print Bon Appetit if the bill is split evenly, meaning ana ate everything, meaning
    //k is undefined
    if(k===undefined){
        console.log("Bon Appetit")
        return "Bon Appetit";
    }
    
    let total = 0;
    for(let i=0; i<bill.length; i++){
        total+= bill[i];
    }
    
    
    const sharedBill = total - bill[k];
    
    const halvedBill = sharedBill/2;
    
    const amountBrianOwesToAna = b - halvedBill;
    
    if(amountBrianOwesToAna===0){
        console.log("Bon Appetit");
        return 
    }
    console.log(amountBrianOwesToAna)
    return
    }