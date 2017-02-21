// Simple Sums

// Write a program that can calculate the sum of the first n elements of the following sequences:

// s1 = 1 - 1 + 1 - 1 + 1 - 1 + //etc
// s2 = 1 + 2 + 3 + 4 + 5 + 6 + //etc
// For example:

// s1(4) = 0
// s2(4) = 10
// Use any language of your choice.

// Can you guess what the sum would be if n is infinity?

var s1 = function( n ){

  // s1 = 1 - 1 + 1 - 1 + 1 - 1 + //etc

  // sum = 0;

  // for( var i = 1; i < n; i++ ){
  //   if( i % 2 === 0 ){
  //     sum -= 1;
  //   } else {
  //     sum += 1;
  //   }
  // }

  // if( n % 2 === 0 ){
  //   // sum -= 1;
  //   return 0;
  // } else {
  //   // sum += 1;
  //   return 1;
  // }

   return n % 2 === 0 ?  0 :  1;

  // return sum;

};

// console.log( s1(4) )

var s2 = function( n ){

  // var sum = 0;

  // for( var i = 0; i <= n; i++ ){
  //   sum += i;
  // }

  return ( n * ( n + 1 ) ) / 2;

}

console.log( s2(4) )