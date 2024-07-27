/*function add(a,b){
    return a+b
}
// I need to export it so that it can be used in different files
//exports.add =add
//or


exports.sub= function(a,b){
    return a-b
}*/

//example

// calc.js

function calculate(type, numItems) {
    let price;
    let vat = 0;

    if (type === 'iphone14') {
        price = 4600;
        vat = 0.05; 
    } else if (type === 'samsung24') {
        price = 4200;
        vat = 0.10; 
    }

    let totalPrice = price * numItems;
    totalPrice += totalPrice * vat; 

    return totalPrice;
}
exports.calculate=calculate;
