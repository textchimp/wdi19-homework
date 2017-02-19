var arrays = {
  reverse: function( inputArray ) {
    var returnArray = [];
    for (var i =  inputArray.length - 1; i >= 0; i-- ) {
      returnArray.push( inputArray[i] );
    }
    return returnArray;
  },

  reverseInPlace: function( inputArray ) {
    var count = inputArray.length;
    for ( i = 0; i < count / 2; i++ ) {
      var temp = inputArray[ i ];
      inputArray[ i ] = inputArray[ count - i - 1];
      inputArray[ count - i - 1 ] = temp;
    }
    return inputArray;
  },

  flatten: function( inputArray ) {
    var returnArray = [];
    for ( i = 0; i <  inputArray .length; i++ ) {
			// Check if the item we are passing over is actually an array, if it is, loop through it.
      if ( Array.isArray( inputArray[ i ] ) ) {
        for ( var j = 0; j <  inputArray[ i ].length; j++ ) {
          returnArray.push( inputArray[ i ][ j ]);
        }
      } else {
        returnArray.push( inputArray[ i ]);
      }
    }
    return returnArray;
  }
} // end Array


var a = [1,2,3,4];
console.log( arrays.reverse( a ) );
var b = [1,2,3,4,5];
console.log( arrays.reverseInPlace( b ) );
// [4,3,2,1]
nested = [1,2,3,[4,5,6], [7,8,9]];
console.log( arrays.flatten( nested ) );
// [1,2,3,4,5,6,7,8,9]
