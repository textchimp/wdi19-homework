# Working with Arrays

The goal of this exercise is to manipulate arrays by creating a function that can reverse an array and by creating a function that can flatten an array. Do not use any library functions (i.e. .reverse or .each) to complete this task, write this stuff from scratch!

- Make two functions
  - reverse
  - flatten

```
reverse( [1, 2, 3, 4] ); // Should return [ 4, 3, 2, 1 ]
flatten( ["Hello", ["World", 42] ] ); // Should return [ "Hello", "World", 42 ]
```

Only make flatten work to one level deep! You should be able to flatten this - ` ["Hello", ["World"]] ` - but not this - ` ["Hello", [[["World"]]]] `

Hint: You're going to need to be looping through the arrays to get a solution.
