/* Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.*/

var maxOfThreeNumbers = function (num1, num2, num3){
  if (num1>num2 && num1>num3){
    return num1;
  } else if (num2>num1 && num2>num3){
    return num2;
  } else {
    return num3
  }
}

console.log(maxOfThreeNumbers(7,10,3));
