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

// Caesar Cipher

// Version 1
var cipher = function(string, offset) {
  var caesar = '';
  for (var i = 0; i < string.length; i++) {
    var x = string[i].charCodeAt();
    if ((x >= 65) && (x <= 90)) {
      caesar += String.fromCharCode(((x - 65 + offset) % 26) + 65);
    }
    else if ((x >= 97) && (x <= 122)) {
      caesar += String.fromCharCode(((x - 97 + offset) % 26) + 97);
    }
    else {
      caesar += " ";
    }
  }
  console.log(caesar);
};

cipher('Genius without education is like silver in the mine', 13);

// Test(Not my code, found on github):
// var caesarShift = function(str, amount) {
//
// 	// Wrap the amount
// 	if (amount < 0)
// 		return caesarShift(str, amount + 26);
//
// 	// Make an output variable
// 	var output = '';
//
// 	// Go through each character
// 	for (var i = 0; i < str.length; i ++) {
//
// 		// Get the character we'll be appending
// 		var c = str[i];
//
// 		// If it's a letter...
// 		if (c.match(/[a-z]/i)) {
//
// 			// Get its code
// 			var code = str.charCodeAt(i);
//
// 			// Uppercase letters
// 			if ((code >= 65) && (code <= 90))
// 				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
//
// 			// Lowercase letters
// 			else if ((code >= 97) && (code <= 122))
// 				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
//
// 		}
//
// 		// Append
// 		output += c;
//
// 	}
//
// 	// All done!
// 	console.log(output);
//
// };
//
// caesarShift('hello world', 1);

// ===========================================================

// Caesar Cipher 2: The Deciphering

var decipher = function(string, offset) {
  var deciphered = '';
  for (var i = 0; i < string.length; i++) {
    var x = string[i].charCodeAt();
    if ((x >= 65) && (x <= 90)) {
      deciphered += String.fromCharCode(((x - 65 + offset) % 26) + 65);
    }
    else if ((x >= 97) && (x <= 122)) {
      deciphered += String.fromCharCode(((x - 97 + offset) % 26) + 97);
    }
    else {
      deciphered += " ";
    }
  }
  console.log(deciphered);
};

decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar', 13);
