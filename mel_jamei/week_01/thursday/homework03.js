/*Geometry Function Lab

Part 1, Rectangle

Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not*/
var rectangle = {
  length: 3,
  width: 4
};

var isSquare = function ( rect ) {

    if (rect.length === rect.width ) {

      console.log('this is a square');

      return true;

  } else {

      console.log('this is not a square');
  }
};
//area - Returns the area of the rectangle

var area = function ( rectan ) {

    var total = rectan.length * rectan.width;

    return total;
}

/*perimeter - Returns the perimeter of the rectangle

};*/

var perimeter = function ( input ) {

    //p = 2 * (length + width)

    var total =  2 * (input.length + input.width);

    return total;

}

isSquare(rectangle);
area(rectangle);
perimeter(input);


//Part 2, Triangle

//Given the following a triangle object like the one below, write the following functions:


//isEquilateral - Returns whether the triangle is equilateral or not

var triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};



var isEquilateral = function (triangle) {

  var a = triangle.sideA;
  var b = triangle.sideB;
  var c = triangle.sideC;

  if (a === b && b === c && a === c) {

      console.log('This is an equilateral triangle');

  } else {``

      console.log('This is not an equilateral triangle');
  }
}

//isIsosceles - Returns whether the triangle is isosceles or not

var isIsosceles = function (triangle) {

  var a = triangle.sideA;
  var b = triangle.sideB;
  var c = triangle.sideC;

    if (!(a===b)c){

      console.log('yes');

    } else {

      console.log('no');
    }
}

//area - Returns the area of the Triangle
var area = function (triangle) { // 1/2 * h * b

    var total = 1/2 * triangle.sideB * triangle.heigth;

    return total;

}

//isObtuse - Returns whether the triangle is obtuse or not

var isObtuse = function (){

}



/*The Cash Register

Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// Input
var cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// Output
cashRegister(cartForParty)); // 60.55*/


var cashRegister = function (cash){

    var input = Object.values(cash);// to get just the values out of object

    var dollars = 0;// to start counting from zero

        for (var i = 0; i < input.length; i++) {
          dollars + = parseFloat(input[i])// parseFlaot to convert strings to decimal numbers
        }
        return dollars;

}


// Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called //validateCreditCard that returns true or false.

var validateCreditCard = function (input){

  var valid =
}



// Here are the rules for a valid number:
// Number must be 16 digits, all of them must be numbers

var validateCreditCard01 = function(input){
  var test = [];
  for(var i=0; i < input.length; i++){
    if(!isNaN(input[i])){
        test.push(parseInt(input[i]));
    }
  }
  if(test.length <= 16){
    return true
  }else{
    return false;
  }

}
// You must have at least two different digits represented (all of the digits cannot be the same)


// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number
// Example
//
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.










//
// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.
