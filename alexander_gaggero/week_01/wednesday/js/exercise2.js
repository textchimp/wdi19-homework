/*
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
*/

function maxOfThree(i,j,k) {
if ( i > j && i > k) {
return i;
} else if ( j > i && j > k) {
return j;
} else
return k;
}

console.log(maxOfThree(33,88,66));
