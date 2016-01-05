function romanize(number){
<<<<<<< HEAD
    var matches = {
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
        7: "VII",
        8: "VIII",
        9: "IX",
        10: "X",
        20: "XX",
        30: "XXX",
        40: "XL",
        50: "L",
        60: "LX",
        70: "LXX",
        80: "LXXX",
        90: "XC",
        100: "C",
        200: "CC",
        300: "CCC",
        400: "CD",
        500: "D",
        600: "DC",
        700: "DCC",
        800: "DCCC",
        900: "CM",
        1000: "M",
    }

    function placeValues(number) {
    //break number into array of its place values
        var numberArray = [];
        var numberCopy=Math.floor(number);
        for (i=1; i<=3; i++) {
            x = ((numberCopy%Math.pow(10,i)));
            numberArray.unshift(x);
            numberCopy = numberCopy-x;
        }
        numberArray.unshift(numberCopy);
        return numberArray;
    }

    function createRomanNumeral(numberArray) {
    //create roman numeral from an array of place values
        var romanNumeral = "";
        if (numberArray[0]>0) {
            for (i=1; i<=numberArray[0]/1000; i++) {
                romanNumeral+=matches[1000];
            }
        }
        for (i=1; i<numberArray.length; i++) {
            if (numberArray[i]>0) {
                romanNumeral+=matches[numberArray[i]];
            }
        }
        return romanNumeral;
    }

    return createRomanNumeral(placeValues(number));
}


var arabicNumeral;
arabicNumeral=prompt("ROMAN NUMERAL CONVERTER--->Choose a number between 1 and 3999");
while ((arabicNumeral<1)||(arabicNumeral>3999)) {
    arabicNumeral=prompt("Try again. Please choose a number between 1 and 3999");
}
alert(arabicNumeral+" = "+romanize(arabicNumeral));

=======
  var matches = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X"
  }
}
>>>>>>> 28ef0f1ab202eb69d978f75cc7bb8b2a60506f1f
