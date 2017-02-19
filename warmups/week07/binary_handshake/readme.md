> There are 10 types of people in the world: Those who understand binary, and those who don't.

You and your fellow cohort of those in the "know" when it comes to binary decide to come up with a secret "handshake".

```
1 = wink
10 = double blink
100 = close your eyes
1000 = jump
10000 = Reverse the order of the operations in the secret handshake.
```
Write a program that will convert a binary number, represented as a string (i.e. "101010"), and convert it to the appropriate sequence of events for a secret handshake.


```

handshake = SecretHandshake.new "11001"
handshake.commands # => ["jump","wink"]
```

The program should consider strings specifying an invalid binary as the value 0.

#### Extensions

Let the user convert either binary or decimal numbers to a secret handshake.
