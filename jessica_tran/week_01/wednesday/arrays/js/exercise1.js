/* Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
*/

var maxOfTwoNumbers = function (num1, num2){
  if (num1>num2){
    return num1
  } else {
    return num2
  }
}

console.log(maxOfTwoNumbers(7,10));
