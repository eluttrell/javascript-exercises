// Hello World!

// console.log("Hello, world!");

// ===========================================================

// Hello You!

// var hello = function(name) {
//   console.log("Hello, " + name + ".");
// };
//
// hello('Moustache');

// ===========================================================

// Hello You2!

// var hello = function(name) {
//   if (name === undefined)
//     console.log("Hello, World!");
//   else
//     console.log("Hello, " + name + ".");
// };
//
// hello();

// ===========================================================

// Madlib

// var madlib = function(name, subject) {
//   return name + "'s favorite subject in school is " + subject;
// };
//
// madlib('Elijah', 'Drafting');

// ===========================================================

// Tip Calculator

// var tipAmount = function(amount, service) {
//   if (service === 'good') {
//     bill = amount * .2;
//     return bill.toFixed(2);
//   }
//   else if (service === 'fair') {
//     bill = amount * .15;
//     return bill.toFixed(2);
//   }
//   else if (service === 'bad') {
//     bill = amount * .1;
//     return bill.toFixed(2);
//   }
// };

// ===========================================================

// Tip Calculator 2

// var totalAmount = function(amount, service) {
//   if (service === 'good') {
//     bill = amount * 1.2;
//     return bill.toFixed(2);
//   }
//   else if (service === 'fair') {
//     bill = amount * 1.15;
//     return bill.toFixed(2);
//   }
//   else if (service === 'bad') {
//     bill = amount * 1.1;
//     return bill.toFixed(2);
//   }
// };

// ===========================================================

// Tip Calculator 3

// var splitAmount = function(amount, service, partyof) {
//   if (service === 'good') {
//     bill = (amount * 1.2) / partyof;
//     return "$" + bill.toFixed(2);
//   }
//   else if (service === 'fair') {
//     bill = (amount * 1.15) / partyof;
//     return "$" + bill.toFixed(2);
//   }
//   else if (service === 'bad') {
//     bill = (amount * 1.1) / partyof;
//     return "$" + bill.toFixed(2);
//   }
// };

// ===========================================================

// Print Numbers

// For Loop Version:
// var printNumbersFor = function(x, y) {
//   for (var count = x; count <= y; count ++)
//     console.log(count);
// };

// While Loop Version:
// var printNumbersWhile = function(x, y) {
//   while (x <= y) {
//     console.log(x);
//     x ++;
//   }
// };

// ===========================================================

// Print a Square

// var printSquare = function(size) {
  // var row = "";
  // for (var i = 0; i < size; i++) {
  //   row += "*";
  // }
  // for (var j = 0; j < size; j++) {
  //   console.log(row);
  // }
// };

// ===========================================================

// Print a box

// Just Size Version:
// var printBox = function(size) {
//   for (var i = 0; i < size; i++) {
//     if (i < 1 || i === size - 1) {
//       var row = "";
//       for (var j = 0; j < size; j++) {
//         row += "*";
//       }
//       console.log(row);
//     }
//     else if (i > 0 && i < size) {
//       var nextRow = "";
      // for (var k = 0; k < size; k++) {
      //   if (k === 0 || k === size - 1) {
      //     nextRow += "*";
      //   }
      //   else
      //     nextRow += " ";
      // }
//       console.log(nextRow);
//     }
//   }
// };

// ===========================================================

// Height/Width Version
// var printBox = function(height, width) {
//   var row = "";
//   var nextRow = "";
  // for (var i = 0; i < width; i++) {
  //   row += "*";
  // }
//   for (var k = 0; k < width; k++) {
//     if (k === 0 || k === width - 1) {
//       nextRow += "*";
//     }
//     else
//       nextRow += " ";
//   }
//   for (var j = 0; j < height; j++) {
//     if (j === 0 || j === height - 1) {
//       console.log(row);
//     }
//     else {
//       console.log(nextRow);
//     }
//   }
// };

// ===========================================================

// Print a Banner
// var printBanner = function(string) {
//   var topBottom = "";
//   var middle = "";
//   for (var i = 0; i < string.length + 2; i++) {
//     topBottom += "*";
//   }
//   for (var j = 0; j < 3; j++) {
//     if (j === 0 || j === 2) {
//       middle += "*";
//     }
//     else {
//       middle += string;
//     }
//   }
//   for (var k = 0; k < 3; k++) {
//     if (k === 0 || k === 2) {
//       console.log(topBottom);
//     }
//     else {
//       console.log(middle);
//     }
//   }
// };
// printBanner('DigitalCrafts!');

// ===========================================================

// Factor a Number

// Version 1:
// var factors = function(num) {
//   var allFactors = [];
//   for (var i = 0; i <= Math.sqrt(num); i++) {
//     var factors1 = "";
//     var factors2 = "";
//     var y = num / i;
//     if (Number.isInteger(y) === true) {
//       factors1 += String(y);
//       allFactors.push(factors1);
//       factors2 += String(i);
//       allFactors.push(factors2);
//     }
//   }
//   console.log(allFactors);
// };
//
// factors(100);

// Version 2:
// ...

// ===========================================================

var cipher = function(string, offset) {
  var ceasar = '';
  for (var i = 0; i < string.length; i++) {
    var x = string[i];
    var y = x.charCodeAt() + offset;
    ceasar += String.fromCharCode(y);
  }
  console.log(ceasar);
};

cipher('hello world', 1);
