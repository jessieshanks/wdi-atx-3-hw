var conversionRate=1.4835;

function dollarsToPounds(dollarAmt) {
  var poundAmt=Math.round((dollarAmt/conversionRate)*100)/100;
  return ("$"+dollarAmt+" is \u00A3"+poundAmt);
}

function poundsToDollars(poundAmt) {
  var dollarAmt=Math.round((poundAmt*conversionRate)*100)/100;
  return ("\u00A3"+poundAmt+" is $"+dollarAmt);
}

function currencyConverter(currencyOrig, currencyNew, amount) {
  if ((currencyOrig==="pounds")&&(currencyNew==="dollars")) {
    return poundsToDollars(amount);
  } else if ((currencyOrig==="dollars")&&(currencyNew==="pounds")) {
    return dollarsToPounds(amount);
  } else {
    return "Currency not recognized";
  }
}

var monies=prompt("How much do you want to exchange?");
var currency1=prompt("In which currency is the money now? (pounds or dollars)").toLowerCase();
var currency2=prompt("To which currency do you wish to convert it? (pounds or dollars)").toLowerCase();

alert(currencyConverter(currency1,currency2,monies));
