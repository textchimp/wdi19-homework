function reverse(numArr){
  var reverseArr = [];
  debugger;
  for (var i = numArr.length-1; i>=0; i--){
    reverseArr.push(numArr[i]);
  }
  console.log("Array given: ",numArr);
  console.log("Reverse of the array: ", reverseArr);
}
reverse( [1, 2, 3, 4] );
