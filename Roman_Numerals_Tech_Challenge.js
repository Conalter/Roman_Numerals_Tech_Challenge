// Basic function with if statement for converting int into Roman numeral string:

// var NumGenerator = function(numeral){
//   if (numeral === 1){
//     console.log("I");
//   } else if (numeral === 2){
//     console.log("II");
//   } else if (numeral === 3){
//     console.log("III");
//   } else if (numeral === 4){
//     console.log("IV");
//   } else if (numeral === 5){
//     console.log("V");
//   } else if (numeral === 6){
//     console.log("VI");
//   } else if (numeral === 7){
//     console.log("VII");
//   } else if (numeral === 8){
//     console.log("VIII");
//   } else if (numeral === 9){
//     console.log("IX");
//   } else if (numeral === 10){
//     console.log("X");
//   } else if ((numeral < 1) || (numeral > 3999)) {
//     console.log("Please try again");
//   }
// }
//
// NumGenerator(9);

// More complicated version using a for loop to convert decimal into roman numeral:

var NumGenerator = function(num){
  var result = '';
  // Checks is number is within paramaters
  if ((num < 1) || (num > 3999)) {
    console.log("Please try again");
  } else {
    // Two arrays, one with decimal number & the other with of the Roman equivalent.
    var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"]
    // Loops over the arrays
    for (var i = 0;i<=decimal.length;i++) {
      // Maintain loop until decimal is less than the Roman numeral
      while (num%decimal[i] < num) {
        // Adds Roman numeral to result string
        result += roman[i];
        // Subtracts decimal value of Roman Numeral from decimal number.
        num -= decimal[i];
      }
    }
  }
  console.log(result);
}
// Number to be converted
NumGenerator(899090);
