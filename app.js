let oneEuroIs = { 
    "JPY": 127.9,
    "USD": 1.2,
    "GBP": 0.8
}



const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}




function fromDollarToYen (dolar)  {
    
    return dolar * 131.18
}
console.log(fromDollarToYen())







function fromYenToPound (yen)  {
    
     
    return yen * 0.0063 
}
console.log(fromYenToPound())

module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound};

